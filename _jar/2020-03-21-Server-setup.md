---
title: "Server setup"
permalink: /server-setup
---
A walktrough of the steps I executed to set up my server. More data and resources can be found in [this](/server) Jar item.

<br />
<br />

## General knowledge

Resources, apps, tutorials and several knowledge sources are mentioned [here](/server).

<br />
<br />

## System configuration and environment setup

update Ubuntu (*`-y` parameter is used to accept by default any question*)
```
sudo apt update -y && sudo apt upgrade -y
```

remove debris
```
sudo apt autoremove
```

add a limited user
```
adduser tommi
```

give that user sudo permissions
```
adduser -aG tommi sudo
```

```
ufw allow OpenSSH
```

```
ufw enable
```

```
ufw status
```

```
sudo ufw allow 'Apache'
```

<br />

### configure SSH Authentication Key-pair

create ssh folder to store allowed keys
```
mkdir -p ~/.ssh && sudo chmod -R 700 ~/.ssh/
```

**on local device**:
```
scp ~/.ssh/id_rsa.pub xplosionmind@100.100.010.1:~/.ssh/authorized_keys
```
NOTE: substitute `100.100.010.1` with the server’s IP address and `xplosionmind` with both `root` user and limited user

<br />

### Change default SSH port

Changing the default SSH port is useful to prevent randomized attacks which attempt to get access to the server from port 22, the default one.
{:.warning}

open the new SSH port from the firewall. In this case, the process I’ll be following configures port `5522`
```
sudo ufw allow 5522/tcp
```
Open the SSH configuration file `/etc/ssh/sshd_config`
```
sudo vim /etc/ssh/sshd_config
```
In this file, replace `#Port 22` with `Port 5522`

restart ssh
```
sudo systemctl restart ssh
```

<br />

install [zsh](https://www.zsh.org/)
```
apt install zsh
```

set zsh as default shell
```
chsh -s /usr/bin/zsh root
```

install zsh syntax highlighting
```
apt install zsh-syntax-highlighting
```

install [git](https://git-scm.com/)
```
apt install git
```

install [oh-my-zsh](https://ohmyz.sh/)
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

enable zsh syntax highlighting
```
echo "source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```

<br />
<br />

## Nextcloud configuration

### Resources

- [official installation documentation](https://docs.nextcloud.com/server/18/admin_manual/installation/source_installation.html)
- complete [installation tutorial](https://youtu.be/QB_FEWJ9BB4) for Ubuntu 20.04, in dutch
- [in-depth guide](https://youtu.be/QXfsi0pwgYw) for Nextcloud 15
- check vulnerabilities with [Nextcloud Scan](https://scan.nextcloud.com)

<br />

### Change permissions

```
sudo chown -R $USER:$USER /var/www/cloud.tommiboom.tk
```

```
sudo chmod -R 755 /var/www/cloud.tommiboom.tk
```


```apache
<VirtualHost *:80>
	ServerAdmin tommiboom@protonmail.com
	ServerName cloud.tommiboom.tk
	ServerAlias www.cloud.tommiboom.tk
	DocumentRoot /var/www/cloud.tommiboom.tk/public_html

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

<br />

### Install MariaDB

```
sudo apt install mariadb-server
```

Basic database configuration
```
sudo mysql_secure_installation
```

log in MariaDB
```
sudo mariadb
```

Create a new database for Nextcloud (in MariaDB):
```sql
mysql> CREATE DATABASE nextcloud;
```

Create a new Nextcloud user
```sql
mysql> GRANT ALL ON nextcloud.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
```

### Install PHP
```
sudo apt install php libapache2-mod-php php-mysql
```

install Nextcloud dependencies
```
sudo apt install php-curl php-dom php-gd php-json php-xml php-mbstring php-zip
```
download Nextcloud and place it in the virtual host directory`
```
sudo cd /var/www/cloud.tommiboom.tk/public_html && sudo wget https://download.nextcloud.com/server/releases/nextcloud-18.0.4.zip
```

extract the downloaded package
```
unzip nextcloud-18.0.4.zip
```

Install Let's Encrypt
```
sudo apt install certbot python3-certbot-apache
```

Enable port `443` instead of port `80`
```
sudo ufw allow 'Apache Full'
sudo ufw delete allow 'Apache'
```

Generate TLS certificate
```
sudo certbot --apache -d cloud.tommiboom.tk -d www.cloud.tommiboom.tk
```

Enable HTTP/2, and rewrite module
```
sudo apt install php7.4-fpm
sudo a2enmod proxy_fcgi
sudo a2enconf php7.4-fpm
sudo a2dismod php7.4
sudo a2dismod mpm_prefork
sudo a2enmod mpm_event
sudo service apache2 restart
sudo a2enmod http2
sudo service apache2 restart
```

### Enable HSTS

add in cloud.tommiboom.tk-le-ssl.conf
```apache
<IfModule mod_headers.c>
      Header always set Strict-Transport-Security "max-age=15552000; includeSubDomains"
</IfModule>
Dare il comando:
sudo a2enmod headers

Abilitare .htaccess
Modificare /etc/apache2/sites-available/cloud.tommiboom.tk/cloud.tommiboom.tk-le-ssl.conf
Aggiungere dentro <VirtualHost *:443>
<Directory "/var/www/cloud.tommiboom.tk/public_html">
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
</Directory>
```



### Install dependencies

#### PHP Modules

Install [PHP](https://www.php.net/) modules
```
apt install php-zip php-dompdf php-xml php-mbstring php-gd php-curl php-imagick php-intl unzip
```
 
adjust `PHP.ini`
```
vim /etc/php/7.4/apache2/php.ini
```

edits:
```php
memory_limit = 1024M # based on how much RAM the server has
upload_max_filesize = 16G # max size of uploaded files
post_max_size = 16G # something similar to the above
date.timezone = Europe/Rome # or your timezone
```
 
restart apache
```
systemctl restart apache2.service
```
 
prepare data folder
```
mkdir /home/data/
chown -R www-data:www-data /home/data/
chown -R www-data:www-data /var/www/nextcloud/
chmod -R 755 /var/www/nextcloud/
```
 
### Set the domain and complete setup 

- point the chosen domain and subdomain to the server IP address
- wait for the domain to propagate (it could take up to 48 hours)
- go to `cloud.example.com`, where you should get this page:

{% include image.html url='https://www.itzgeek.com/wp-content/uploads/2019/06/Install-Nextcloud-on-RHEL-8-%E2%80%93-Setup-Nextcloud.jpg' alt='Nextcloud first setup page' title='Nextcloud first setup page' description='Nextcloud first setup page' %}

<br />

**Don’t** insert any data in the dialogue page above until connection is encrypted with `https://`. To obtain a SSL Certificate, thus an encrypted connection, follow the next step.
{: .warning}

<br />

## Let's Encrypt SSL Certificate

install [certbot](https://certbot.eff.org/)
``` 
apt install certbot python3-certbot-apache
```

get SSL certification for the domain
```
certbot --apache -m tommiboom@protonmail.com -d cloud.tommiboom.tk
```

**NOTE**: it only lasts 90 days

<br />

### Final adjustments

Final adjustments are to be performed from the Nextcloud GUI. The [Nextcloud apps](https://apps.nextcloud.com/) I installed are listed [here](/server#nextcloud-apps)

<br />

## Nextcloud cheatsheet

A list of useful commands to perform when needed (often).

<br />

### Manually install applications

move to the Nextcloud apps folder
```
cd /var/www/nextcloud/apps
```

download the application package from [Nextcloud apps website](https://apps.nextcloud.com/)
```
wget https://github.com/nextcloud/documentserver_community/releases/download/v0.1.5/documentserver_community.tar.gz # url to the package
```

extract it (by substituting `package_name` with the name of the app package)
```
tar -xvzf package_name.tar.gz
```

remove compressed package
```
rm -rf package_name.tar.gz
```

change permissions for the app’s directory
```
chown -R www-data:www-data /var/www/nextcloud/apps/app_name
chmod -R 755 /var/www/nextcloud/apps/app-name
```

<br />

### Manteinance mode

enable manteinance mode
```
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --on
```

disable manteinance mode
```
sudo -u www-data php /var/www/nextcloud/occ maintenance:mode --off
```

<br />

### fixes

- [fix encryption error](https://github.com/nextcloud/server/issues/8546#issuecomment-514139714)

<br />
<br />

## Install Jitsi Meet

Here’s an (old) official [tutorial](https://youtu.be/8KR0AhDZF2A) still pretty solid, though.

create an Apache configuration file
```
vim /etc/apache2/sites-available/jitsi.conf
```

paste this inside:
```apache
<VirtualHost *:80>
        ServerName call.tommiboom.tk
        ServerAlias www.call.tommiboom.tk

        ServerAdmin tommiboom@protonmail.com
        DocumentRoot /var/www/jitsi

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

</VirtualHost>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

point a subdomain to the IP address of the server. In this case, the name is `call.tommiboom.tk`, as seen above.

at this point, get SSL certification for the domain
```
certbot --apache -m tommiboom@protonmail.com -d call.tommiboom.tk
```

enable configuration
```
a2ensite jitsi.conf
a2enmod rewrite
a2enmod headers
a2enmod env
a2enmod dir
a2enmod mime
```
 
restart apache
```
systemctl restart apache2.service
```

Add the Jitsi repository to the package manager and refresh the server’s package lists
```
echo 'deb https://download.jitsi.org stable/' >> /etc/apt/sources.list.d/jitsi-stable.list
wget -qO -  https://download.jitsi.org/jitsi-key.gpg.key | sudo apt-key add -
apt update
```

actually install Jitsi Meet
```
apt install jitsi-meet
```







## INSTALL DOCKER

installing
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

<br />

allow Docker to run as a root from this user
```
sudo usermod -aG docker
```

<br />

enable Docker to start on boot
```
$ sudo systemctl enable docker tommi
```

<br />
<br />

## INSTALLING DOCKER COMPOSE

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

<br />

to enable bash completion, insert in `~/.zshrc`
```
plugins=(... docker docker-compose
)
```

<br />
<br />

## LazyDocker

Install <a href="https://github.com/jesseduffield/lazydocker" rel="noopener" target="_blank">Lazydocker</a> to interact easily with Docker. Since it’s written in Go, installation of the language is needed.

<br />

download Go
```
wget -c https://dl.google.com/go/go1.14.3.linux-amd64.tar.gz
```

<br />

extract archive
```
sudo tar -C /usr/local -xvzf go1.14.3.linux-amd64.tar.gz
```

<br />

install Go
```
export PATH=$PATH:/usr/local/go/bin
```

<a href="https://github.com/jesseduffield/lazydocker#installation" rel="noopener" target="_blank">install and run Lazydocker</a>

<br />
<br />
