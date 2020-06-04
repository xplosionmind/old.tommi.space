---
title: "Server setup"
permalink: /server-setup
categories: geek
code: "true"
---
A walktrough of the steps I executed to set up my server. More data and resources can be found in [this](/server) Jar item.

A **huge shoutout** to my friend [Claudio](http://claudiofaoro.com), who helped me a lot to understand and perform the most tricky parts.

<br />
<br />

## General knowledge

Resources, apps, tutorials and several knowledge sources are mentioned [here](/server).

<br />
<br />

## System configuration and environment setup

update [Ubuntu](https://ubuntu.com/server), `-y` parameter is used to accept by default any question
```
sudo apt update -y && sudo apt upgrade -y
```

remove debris
```
sudo apt autoremove
```

<br />

## Add a limited user

It’s always better not to work and setup stuff straight from root user, it’s easy to mess everything up and very risky if you’re not 100% sure of what you’re doing (for me, most of the time).

add user
```
adduser tommi # “tommi”, in this case, is the username
```

grant that user sudo permissions
```
adduser -aG tommi sudo
```

<br />

### Firewall configuration

Enable default configuration
```
ufw allow OpenSSH
```

enable firewall
```
ufw enable
```

check if everything is working
```
ufw status
```

first things firts:
```
sudo ufw allow 'Apache'
```

<br />

### configure SSH Authentication Key-pair

create [ssh](https://www.ssh.com/ssh/) folder to store allowed keys
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

Changing the default SSH port is useful to prevent randomized attacks which attempt to get access to the server from [port 22](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers), the default one.
{:.warning}

Enable the new SSH port from the firewall. In this case, the process I’ll be following configures port `5522`
```
sudo ufw allow 5522/tcp
```
Open the SSH configuration file `/etc/ssh/sshd_config`
```
sudo vim /etc/ssh/sshd_config
```
In this file, replace `#Port 22` with `Port 5522`

after this, disable connections from port 22
```
sudo ufw deny 22
```

restart ssh
```
sudo systemctl restart ssh
```

<br />

### Install git

install [git](https://git-scm.com/)
```
apt install git
```

<br />

### Install zsh

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

### Permissions

Firstly, it’s necessary to create the folder where Nextcloud interface, thus public application files, will be stored.

In this case, I configured a directory which is named exactly as the domain where the content it’s hosting will be found, for simplicity.
```
sudo mkdir /var/www/cloud.tommiboom.tk
```

then, permissions can be changed, such that Nextcloud itself can handle this data, once installed. As you can see, these permissions must be set `-R` recursively.
```
sudo chown -R $USER:$USER /var/www/cloud.tommiboom.tk
sudo chmod -R 755 /var/www/cloud.tommiboom.tk
```

make the (private) directory where all of nextcloud data will be stored, and change its permissions, too
```
mkdir /home/xplosionmind/nextcloud-data
sudo chown -R www-data:www-data /home/xplosionmind/nextcloud-data/
```

<br />

### Apache configuration file

This is the essential content of an Apache configuration fil for nextcloud. It should be placed in `/etc/apache2/sites-available/`

create the configuration file by running
```
sudo vim /etc/apache2/sites-available/cloud.tommiboom.tk.conf
```

then, add this content
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

<br />

### Install PHP

Install [PHP](https://www.php.net/) modules
```
sudo apt install php libapache2-mod-php php-mysql
```

install Nextcloud dependencies
```
sudo apt install php-curl php-dom php-gd php-json php-xml php-mbstring php-zip
```

adjust `PHP.ini`
```
sudo vim /etc/php/7.4/apache2/php.ini
```

edits:
```php
memory_limit = 1024M # based on how much RAM the server has
upload_max_filesize = 16G # max size of uploaded files
post_max_size = 16G # something similar to the above
date.timezone = Europe/Rome # or your timezone
```

<br />

### Install Nextcloud

download Nextcloud and place it in the virtual host directory
```
sudo cd /var/www/cloud.tommiboom.tk/public_html && sudo wget https://download.nextcloud.com/server/releases/nextcloud-18.0.4.zip
```

extract the downloaded package
```
unzip nextcloud-18.0.4.zip
```

### Install Let's Encrypt

[Certbot] will be use to establish a secure connection to the instance. To make things simple, it’s the one which makes an unencrypted `http://` connection magically become an encrypted `https://` connection
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

<br />

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

<br />

### Enable HSTS

add in cloud.tommiboom.tk-le-ssl.conf
```apache
<IfModule mod_headers.c>
      Header always set Strict-Transport-Security "max-age=15552000; includeSubDomains"
</IfModule>
```

to enable what has just been inserted, headers abilitation must be performed
```
sudo a2enmod headers
```

then, enable `.htaccess`
```
sudo vim /etc/apache2/sites-available/cloud.tommiboom.tk/cloud.tommiboom.tk-le-ssl.conf
```

paste in `<VirtualHost *:443>`
```apache
<Directory "/var/www/cloud.tommiboom.tk/public_html">
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
</Directory>
```

<br />

restart apache
```
systemctl restart apache2
```
 
<br />
 
### Set the domain and complete setup 

- point the chosen domain and subdomain to the server IP address
- wait for the domain to propagate (it could take up to 48 hours)
- go to `cloud.example.com`, where you should get this page:

{% include image.html url='https://www.itzgeek.com/wp-content/uploads/2019/06/Install-Nextcloud-on-RHEL-8-%E2%80%93-Setup-Nextcloud.jpg' alt='Nextcloud first setup page' title='Nextcloud first setup page' description='Nextcloud first setup page' %}

**Don’t** insert any data in the dialogue page above until connection is encrypted with `https://`. To obtain a SSL Certificate, thus an encrypted connection, follow the next step.
{: .warning}

<br />

### Final adjustments

Final adjustments are to be performed from the Nextcloud GUI. The [Nextcloud apps](https://apps.nextcloud.com/) I installed are listed [here](/apps#nextcloud)

<br />

### fixes

- fix [this](https://github.com/nextcloud/server/issues/8546#issuecomment-514139714) encryption error

<br />
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
<br />

## Install Jitsi Meet

[installation guide](https://www.vultr.com/docs/install-jitsi-meet-on-ubuntu-20-04-lts)

allow firewall for ports 100000 to 200000
```
sudo ufw allow in 10000:20000/udp
```

Jitsi requires the Java Runtime Environment. Install OpenJDK JRE 8.

**NOTE**: as of right now, Jitsi Meet needs JRE 8, ***not a newer version***!
{:.warning .red}

```
sudo apt install -y openjdk-8-jre-headless
```

check if installation went the right way and if the right version is installed
```
java -version
```

setup Java Runtime
```
sudo echo "JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:bin/java::")" | sudo tee -a /etc/profile
sudo source /etc/profile
```

download Jitsi Meet and add it to `apt` downloadable list
```
wget -qO - https://download.jitsi.org/jitsi-key.gpg.key | sudo apt-key add -
echo "deb https://download.jitsi.org stable/"  | sudo tee -a /etc/apt/sources.list.d/jitsi-stable.list
```

install Jitsi Meet
```
sudo apt install -y jitsi-meet
```

run and enable certbot
```
sudo sed -i 's/\.\/certbot-auto/certbot/g' /usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
sudo ln -s /usr/bin/certbot /usr/sbin/certbot
sudo /usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

If something around here doesn’t work, no worries: just repeat the command, it should get fixed by itself
{:.warning}


last tweaks should be done in here
```
sudo vim /etc/apache2/conf-enabled/security.conf
```

There are a few very nice things, such as hiding the “Jitsi” watermark from calls, which can be improved by editing Jitsi’s css file. Here’s [a customizations guide](https://technologyrss.com/how-to-customize-jitsi-meet-video-conference-server/).
