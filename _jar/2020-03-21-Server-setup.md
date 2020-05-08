---
title: "Server setup"
permalink: /server-setup
---
A walktrough the commands I executed to set up my server on <a href="https://www.linode.com/" rel="noopener" target="_blank">Linode</a>.
## OS CONFIGURATION

update Ubuntu

```
$ sudo apt update -y && sudo apt upgrade -y
```

<br />

remove debris
```
$ sudo apt autoremove
```

<br />

add limited user
```
$ adduser tommi
```

<br />

give that user sudo permissions
```
$ adduser tommi sudo
```

<br />

install zsh
```
$ apt install zsh
```

<br />

set zsh as default shell
```
$ chsh -s /usr/bin/zsh root
```

<br />

zsh syntax highlighting
```
$ sudo apt install zsh-syntax-highlighting
```

enable syntax highlighting
```
$ echo "source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```

<br />

installing git
```
$ apt install git
```

<br />

installing oh-my-zsh
```
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

<br />

re-enable zsh highlighting
```
$ echo "source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```

<br />
<br />

## INSTALLING DOCKER

setting up stuff for Linode
```
$ sudo apt install dmsetup && dmsetup mknodes
```

<br />

installing
```
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

<br />

enable Docker to start on boot
```
$ sudo systemctl enable docker
```

<br />
<br />

## INSTALLING DOCKER COMPOSE

```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
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

```
$ mkdir composetest
$ cd composetest
```

<br />

```
vim app.py
```

<br />

paste this inside:
```
import time

import redis
from flask import Flask

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)


def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)


@app.route('/')
def hello():
    count = get_hit_count()
    return 'Hello World! I have been seen {} times.\n'.format(count)
```

<br />

```
$ vim requirements.txt
```

<br />

paste this inside:
```
flask
redis
```

<br />

```
$ vim Dockerfile
```

<br />

paste this inside
```
FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["flask", "run"]
```

<br />

```
$ vim docker-compose.yml
```

<br />

paste this inside
```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
```

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

