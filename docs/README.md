# May 14 2019 Workshop

> Docker and small scale production ready apps

> When: Tuesday May 14th 5:30 to 7:30

need to illustrate the application


## Agenda

What: Dockerize a small scale application for development and production environments: discussion and workshop:

Where: Alliance room at Quartech's office. 2nd floor 1012 Douglas Street (Quartech has generously allowed us to use this meeting room and will provide some pizzas and beverages too.)

The problems we’ll address include
- set up a secure production server suitable for small scale application
- passing secrets into the application
- securing MongoDB inside a container
- handling OS specific dependencies
- proxying API calls
- using the same configuration for both development and production with minimal differences.
and more

We’ll be using NodeJS with Express and MongoDB to create an API micro-service.
On development we'll have a hot-swapping Vue client.
On production will use static files served by Nginx.
Nginx will also proxy the API calls. The whole environment will be built with docker-compose.

This particular meetup will focus on the server side. In a subsequent meetup we’ll look more at Vue and perhaps, with help, React.

Agenda:
- greetings and introductions
- short presentation on the technology
- hands on practice. 
- general discussion


## Preparation 

You need to install
- docker (requires you create a free Docker Hub account)
- npm/node
- git 
- your favourite IDE

Here are some links you may find useful:

- [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)
- [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)

Node NPM

- [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)


## 12 Factor
See [12](/#twelve-factors)

This project strives to follow [the 12 factors](https://12factor.net/)

 . | Factor | How we do it
-- | ------ | ------------
I. | Codebase | One repository
II. | Dependencies | All dependencies are declared in package.json files
III. | Config | Critical configuration is externalized and imported during docker startup
IV. | Backing services | 
V. | Build, release, run | 
VI. | Processes | 
VII. | Port binding | Services are exported via port binding
VIII. | Concurrency | 
IX. | Disposability | Containerized the processes. They can be discarded and rebuilt
X. | Dev/prod parity | Development and production are as similar as possible
XI. | Logs | 
XII. | Admin processes | 



Can create a DO secure droplet with one user and no root access. SSH only. Using DO snapshot.  Takes 8 minutes to create
from the notes in [server set up notes](./server.md)
  
  
