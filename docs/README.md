# May 14 2019 Workshop

> Docker and small scale production ready apps

> #1 When: Tuesday May 14th 5:30 to 7:30
> #2 When: Tuesday June 25th 5:30 to 7:30


## Agenda

What: Dockerize a small scale application for development and production environments: discussion and workshop:

Where: Alliance room at Quartech's office. 2nd floor 1012 Douglas Street (Quartech has generously allowed us to use this
meeting room and will provide some pizzas and beverages too.)

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

For session #2 (June 25th) review all the material in Stage 1. We will start the second sesson with a quick review and then
dive into stage 2.  

## About the workshop stages
This workshop is broken down into three stages. Combined these stages take us from a bare server through to a production
ready web app with server api backed by a database.

### Stage 1
Set up a secure production server

### Stage 2
Set up a web site

### Stage 3
Set up an API backed by a secure database.

## 12 Factor
This project strives to achieve [the 12 factors](https://12factor.net/) of modern era software development

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
  
  
