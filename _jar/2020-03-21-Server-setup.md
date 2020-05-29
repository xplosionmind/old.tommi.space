---
title: "Server setup"
permalink: /server-setup
---
A walktrough of the steps I executed to set up my Ubuntu 20.04 server. More data and resources can be found in [this](/server) Jar item.

<br />

## References and resources

- <a href="https://www.linode.com/docs/getting-started/" rel="noopener noreferrer" target="_blank">Getting started with Linode</a>
- <a href="https://www.linode.com/docs/platform/billing-and-support/linode-beginners-guide/" rel="noopener noreferrer">Linode beginner's guide</a>
- <a href="https://www.linode.com/docs/troubleshooting/troubleshooting-ssh/" rel="noopener noreferrer" target="_blank">Linode SSH troubleshooting</a>
- Harden <a href="https://en.wikipedia.org/wiki/Secure_Shell" rel="noopener" target="_blank">SSH</a> access and <a href="https://www.linode.com/docs/security/securing-your-server/" rel="noopener" target="_blank">secure the server</a>

## First-time setup

update Ubuntu

```
sudo apt update -y && sudo apt upgrade -y
```

`-y` parameter is used to accept by default any question

<br />

remove debris
```
sudo apt autoremove
```

<br />

add a limited user
```
adduser tommi
```

<br />

give that user sudo permissions
```
adduser tommi sudo
```

### configure SSH Authentication Key-pair

create ssh folder to store allowed keys
```
mkdir -p ~/.ssh && sudo chmod -R 700 ~/.ssh/
```

**on local device**
```
scp ~/.ssh/id_rsa.pub xplosionmind@100.100.010.1:~/.ssh/authorized_keys
```
NOTE: substitute `100.100.010.1` with the server’s IP address and `xplosionmind` with both `root` user and limited user


<br />

install zsh
```
apt install zsh
```

<br />

set zsh as default shell
```
chsh -s /usr/bin/zsh root
```

<br />

install zsh syntax highlighting
```
apt install zsh-syntax-highlighting
```

<br />

install git
```
apt install git
```

<br />

install oh-my-zsh
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

<br />

enable zsh syntax highlighting
```
echo "source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```

<br />
<br />

## Nextcloud configuration

- [official documentation](https://docs.nextcloud.com/server/18/admin_manual/installation/source_installation.html)


Install PHP Modules

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
 
MariaDB Server configuration
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
```php
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
 
## Let's Encrypt SSL Certificate ##

install [certbot](https://certbot.eff.org/)
``` 
apt install certbot python3-certbot-apache
```

get SSL certification for the domain
```
certbot --apache -m tommiboom@protonmail.com -d cloud.tommiboom.tk
```

NOTE: it only lasts 90 days{:.warning}
 
### Set the domain and complete setup 

- point the chosen domain and subdomain to the server IP address
- wait for the domain to propagate (it could take up to 48 hours)
- go to `cloud.example.com`, where you should get this page:

{% include image.html url='https://www.itzgeek.com/wp-content/uploads/2019/06/Install-Nextcloud-on-RHEL-8-%E2%80%93-Setup-Nextcloud.jpg' alt='Nextcloud first setup page' title='Nextcloud first setup page' description='Nextcloud first setup page' %}


<br />
<br />


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
