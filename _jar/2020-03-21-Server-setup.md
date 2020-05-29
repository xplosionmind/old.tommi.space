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

update Ubuntu
```
sudo apt update -y && sudo apt upgrade -y
```
`-y` parameter is used to accept by default any question

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
adduser tommi sudo
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

[official documentation](https://docs.nextcloud.com/server/18/admin_manual/installation/source_installation.html)


### Install dependencies

Install [php](https://www.php.net/) modules
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
 
mySQL Server configuration
```
mysql_secure_installation
```
 
open SQL dialogue
```
mysql
```

Create Nextcloud database
```sql
mysql> CREATE DATABASE Nextcloud;
```
 
create database user with password
```sql
mysql> CREATE USER 'xplosionmind'@'localhost' IDENTIFIED BY 'password_here';
```

grant access to everything (`*.*`) to the new user
```sql
mysql> GRANT ALL ON *.* TO 'nextclouduser'@'localhost';
```
 
save changes and exit
```sql
mysql> FLUSH PRIVILEGES;
mysql> EXIT;
```

<br />

### Actual installation

Download lastest Nextcloud version
```
cd /tmp && wget https://download.nextcloud.com/server/releases/latest.zip
unzip latest.zip
rm -rf latest.zip
mv nextcloud /var/www/
```
 
create a Nextcloud configuration file
```
vim /etc/apache2/sites-available/nextcloud.conf
```

paste this inside:
```apache
<VirtualHost *:80>
     ServerAdmin tommiboom@protonmail.com
     DocumentRoot /var/www/nextcloud/
     ServerName cloud.tommiboom.tk
     ServerAlias www.cloud.tommiboom.tk
 
     Alias /nextcloud "/var/www/nextcloud/"
 
     <Directory /var/www/nextcloud/>
        Options +FollowSymlinks
        AllowOverride All
        Require all granted
          <IfModule mod_dav.c>
            Dav off
          </IfModule>
        SetEnv HOME /var/www/nextcloud
        SetEnv HTTP_HOME /var/www/nextcloud
     </Directory>
 
     ErrorLog ${APACHE_LOG_DIR}/error.log
     CustomLog ${APACHE_LOG_DIR}/access.log combined
 
</VirtualHost>
```
 
Enable the NextCloud and Rewrite Module
```
a2ensite nextcloud.conf
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

## Final adjustments

Final adjustments are to be performed from the Nextcloud GUI. The [Nextcloud apps](https://apps.nextcloud.com/) I installed are listed [here](/server#nextcloud-apps)


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
