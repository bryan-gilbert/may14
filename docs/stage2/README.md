# Stage 2 - Debian Server with Nginx in Docker, NPM, Node, Vue

## Workshop Instructions
``` 
git checkout -b stage2
```

## Introduction
The following steps, after practice, take about 10 minutes to complete with a reasonable internet connection.

Prerequisite: you have a secure server setup as described in Stage 1 

Objective: We will have a web server, that will server a sample web site. Both will be production ready and have a great developer experience.  

1. ![checked] Production quality web server. Responsive. Ready for micro-services. 
2. ![checked] Web server restarts after reboot
3. ![checked] Web server docker-ized
4. ![checked] Vue web site with hot-swapping development environment
5. ![checked] For "prod" you can run exactly the same system on your development box that will run on the production server. 
6. ![checked] Docker compose provides 

[checked]: ../images/checked-20.png "checked"
[unchecked]: ../images/unchecked-20.png "unchecked"

Very few files contribute to this stage.  We need a very simple Docker file to set up nginx and a docker-compose file to join the nginx
with the static web site.  Plus we set up our vue directory.  Note that we don't install nginx on our server.  By placing nginx in a container
we can run the same container, with exactly the same configuration, on both our development box and any server we wish. 

Why Debian?  We can just as easily use Ubuntu for our demonstrations because Ubuntu is a fork of Debian.  Your choice when
you extend your application.  I've chosen Debian because the work can easily port to Ubuntu if needed and Debian is known
to the more stable and secure. [see point 11](https://www.ubuntupit.com/debian-vs-ubuntu-top-15-things-to-know-before-choosing-the-best-one/)
RedHat's OS is also fine.  

We're using nginx for our web server because it is by far the best choice for our application architecture that is comprised
of static web resources complimented by API calls supported by a backend database.

We start by setting up the server with Docker, npm and node.js. 


## Workshop Instructions
Log onto your server with the new (sudo-capable) user and follow the sections below.

## Install Docker on Debian

For complete details see the [docs](https://docs.docker.com/install/linux/docker-ce/debian/).

### Set up the debian repository for docker
```
sudo apt-get update
 
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88
# verify the finger print is 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88

# get the stable version 
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
```

### Install Docker-CE
```
sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# verify all is well ...
sudo docker run hello-world
```

### Install Docker-Compose
For complete details see the [docs](https://docs.docker.com/compose/install/)
The docs show how to install docker-compose on Mac, Windows, Linus, etc.

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo docker-compose --version
```

## Install NPM, Node 
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

sudo apt-get install -y nodejs
```

## Sample web site
Go to the next part and set up the sample web site. Next: [client](./2.client.md)
