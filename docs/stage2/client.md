# Stage 2 - Sample web site / client

> Create a sample Vue web site

This stage could have used another web technology other than Vue. React, Angular, and others are all fine for the purposes here.
I've chosen Vue because I'd like to use it and it's simple to get up and running.  One command to create a project. One to
run a development instance and one to build the production ready static web site.  That's perfect for our needs here today.

[Vue CLI guide](https://cli.vuejs.org/guide/)

## Installation
> Skip this lengthy section during the workshop. It describes how to set up the Vue web site.

When you want to create your own new application you can use the following to install Vue CLI locally and create a sample web site.
For the workshop these steps have been done for you.

The directory structure started like this
```
.
├─ ...
├─ client/
└─ ...
```
We then initialize the vue directory to make it a npm project.  ```npm init```. Just accept the defaults for now.
This creates the basic ```package.json``` file.  This allows us to install Vue CLI and keep
the setup.  
```
cd client
# to create package.json run
npm init
# to install Vue CLI
npm install  @vue/cli —save

# to build the client sample vue web site run
npm run build
```
When we build the vue client the ```dist``` folder is created and it contains the static web site.
We will link this directory to in our docker compose file to tell nginx to server this directory for all requests to our site.

We end with a directory structure like this:

```
.
├─ ...
├─ client/
│  ├─ package.json
│  └─ my-project/
│     ├─ dist/
│     ├─ public/
│     ├─ src/
│     └─ package.json
└─ ...
```

You can add ```**/dist/**``` to your root .gitignore file to ignore the generated built files.


## Workshop Instructions
The project has everything you need except we need to install the dependencies.

> Install dependencies

``` 
cd client
npm install  # installs Vue CLI locally

cd my-project
npm install
```

> Try out the development environment

On your development machine only, in the my-project folder, try out the hot-swapping Vue server.
```
cd client/my-project
# to build the client sample vue web site run
npm run serve
```
This launches the vue hot-swap server which watches for changes to your code, retranspiles the files and pushes the changes
to your open browser window. Go ahead and make a change to a file in the sample app. For example, add a paragraph into
```my-project/src/App.vue``` in the topmost template section. Save the file (if your IDE doesn't do that for you automatically).
Return to your browser and the change will be there.

> Important to build the client on both the development and server

When done making changes build the client web site. Do this on both your dev and prod enviroments.
The build produces the production ready static web site.
```
cd client/my-project
npm run build
```


Next we set up docker with nginx. Go to [deploy](./deploy.md)

