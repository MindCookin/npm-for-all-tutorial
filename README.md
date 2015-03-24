# Browserify

Browserify let you use npm packages into the browser. How? easy, it is just a Common JS (the NodeJS module format) packager, but it injects much of the functionalities of NodeJS into the browser.

Simple, but incredibly powerful.

This branch shows up a basic browserify project. We require a node_modules module called _english-time_ into our app, and load it from `widget.js`. We also use `require('widget')` to insert our own module into `index.html` dynamically.

Run `npm start` to see it in action.

Please check `package.json`, `index.html` and `widget.js` for an depth overview. 
