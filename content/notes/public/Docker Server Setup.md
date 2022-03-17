---
date: 2021-01-27T22:03:09+01:00
updated: 2022-03-14T14:59:05+01:00
tags:
  - geek
  - dumped
toc: false
description: Configuration of a Docker server
---
After configuring my [[Server]] as written in [[Server setup]], me and my friend [Claudio](https://claudiofaoro.com 'Claudio Faoro’s personal website') figured that even if understanding [Docker](https://www.docker.com/ 'Docker official website') is boring and tricky, managing and maintaining software through it is much more simple and secure.

So one night we backed up all of my data on the server, we completely wiped it clean, and we reinstalled Ubuntu 20.04 from scratch. After doing this, we reinstalled everything through Docker.

Actually, it’s quite useless to thoroughly write and explain all of the steps to do this since there are some very well written guides which I'll link below.

- [Initial server setup](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04 'Initial Server Setup with Ubuntu 20.04')
- [How to install and use Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04 'How to install and use Docker on Ubuntu 20.04')
- [How to install and use docker-compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04 'How to install and use docker-compose on Ubuntu 20.04')
- [How to use Træfik v2 as a reverse proxy for Docker containers](https://www.digitalocean.com/community/tutorials/how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04 'How to use Træfik v2 as a reverse proxy for Docker containers on Ubuntu 20.04')
- [docker-compose config files](https://github.com/claudiofaoro/my-docker-containers 'my-docker-containers by Claudio Faoro on GitHub'), a repository made by Claudio containing the docker-compose files we use to set stuff up.

<br>
<br>

## Useful commands

occ through Docker
```shellsession
docker-compose exec --user www-data app php occ db:add-missing-indices
```
