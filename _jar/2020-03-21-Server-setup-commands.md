---
title: "Server setup"
permalink: /server-setup
---
A walktrough the steps I executed to set up my server on <a href="https://www.linode.com/" rel="noopener noreferrer" target="_blank">Linode</a>.

<br />

## Spoiler

I started configuring Docker but it has been such a mess that I ended up installing <a href="https://maadix.net/" rel="noopener" target="_blank">Maadix</a>.

<br />
<br />

## References and resources

- <a href="https://www.linode.com/docs/getting-started/" rel="noopener noreferrer" target="_blank">Getting started with Linode</a>
- <a href="https://www.linode.com/docs/platform/billing-and-support/linode-beginners-guide/" rel="noopener noreferrer">Linode beginner's guide</a>
- <a href="https://www.linode.com/docs/troubleshooting/troubleshooting-ssh/" rel="noopener noreferrer" target="_blank">Linode SSH troubleshooting</a>
- Harden <a href="https://en.wikipedia.org/wiki/Secure_Shell" rel="noopener" target="_blank">SSH</a> access and <a href="https://www.linode.com/docs/security/securing-your-server/" rel="noopener" target="_blank">secure the server</a>

## CONFIGURATION

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
sudo apt install zsh-syntax-highlighting
```

<br />

install git
```
sudo apt install git
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

### [GETTING STARTED - DOCKER COMPOSE](https://docs.docker.com/compose/gettingstarted/)

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

## [INSTALLING LINODE'S `LAMP`](https://www.linode.com/docs/applications/containers/how-to-install-docker-and-deploy-a-lamp-stack/)

Search for linode user images:
```
$ sudo docker search linode
```

<br />

Download the linode/lamp image:
```
$ sudo docker pull linode/lamp
```

<br />

Run, create, or turn on a new container and forward port 80:
```
$ sudo docker run -p 80:80 -t -i linode/lamp /bin/bash
```

<br />

As the container’s root user, start Apache:
```
$ service apache2 start
```

<br />

Start MySQL:
```
$ service mysql start
```

<br />

Exit the container while leaving it running by pressing `ctrl + p` then `ctrl + q`.

Enter the IP address in a web browser to test the site.

> The website’s root directory is `/var/www/example.com/public_html/`.

<br />
<br />

## OPTIMIZE APACHE FOR LINODE 1GB

Make a copy of Apache’s configuration file. You can restore the duplicate (apache2.backup.conf) if anything happens to the configuration file:
```
$ sudo cp /etc/apache2/apache2.conf /etc/apache2/apache2.backup.conf
```

<br />

Open Apache’s configuration file for editing:

```
$ sudo vim /etc/apache2/apache2.conf
```

<br />

add this at the end of the file
```
KeepAlive Off

   ...

   <IfModule mpm_prefork_module>
       StartServers 4
       MinSpareServers 20
       MaxSpareServers 40
       MaxClients 200
       MaxRequestsPerChild 4500
   </IfModule>
```

<br />

Restart Apache to incorporate the new settings:
```
sudo systemctl restart apache2
```

### [Configure Name-based Virtual Hosts](https://www.linode.com/docs/websites/hosting-a-website-ubuntu-18-04/#configure-name-based-virtual-hosts)

