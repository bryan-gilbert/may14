# Stage 3 - Express server, Vue client

> We'll now add an API server to our system and update our Vue client to use the API.

## Workshop Instructions
```
git checkout -b stage3.2
```

## Express Server

There is too little time during the workshop to describe how to build the sample express server that is now in our
project. 

## Client updates
For the client web site ```my-project``` has the following changes
- ```npm install -D pug-plain-loader pug``` so we can create Vue components with pug. Lean and mean pug.
- ```npm install axios``` so we can make API calls
- Captured logo images for Express and Node and display those.
- Changed the welcome message
- Removed the Hello World component.
- Add .eslintrc.js 
- Create new ```ReverseWord``` component
- Add form to ReverseWord 

### ReverseWord Vue component
This component has a simple form. Enter some text and press the button. That triggers
the loadReverse method that sends a request to our API server. 
