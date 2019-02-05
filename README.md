# HelloNodeJS
A node.js learning note

Referencing: [NodeJS Note](http://www.runoob.com/nodejs/)

## A Basic HTTP Server

- [a001_server.js](a001_server.js): Create a basic HTTP server.

## Introduction of NPM

- Using 'npm init' to initialize the project
    - creating it's 'package.json'
    
- Using 'npm adduser' to add a user of Git

- Using 'npm publish' to publish my module on the Git

- Using 'npm' to install a module 'express', which is a most popular web server architecture.

```text
$ npm install express #local install
$ npm install express -g #global install
```

- Using 'npm list -g' to observe global modules.

- The 'package.json' is under 'node_modules/express/package.json' including

    - name: module name
    - version: module version
    - description: module description
    - homepage: module homepage URL
    - author: module author name
    - contributors: other contributors' name
    - dependencies: dependencies of the module. They will be installed under the node_module automatically.
    - repository: where the module saving. Git (github) or SVN
    - main: program entry ('index.js' for default) of the module. require('moduleName') will load this file.
    - keywords: keywords of the module
    
- Using 'npm uninstall express' to uninstall the module
    - but dependencies of it will not be uninstalled
    
- Using 'npm update express' to update the module

- Using 'npm search express' to search information of the module

## Node.js REPL (Read Eval Print Loop)

- Using 'node' to start the node console

## Callback Function

- Blocking instance: [a002_blocking.js](a002_blocking.js)
- Un-blocking instance: [a003_unblocking.js](a003_unblocking.js)

## Events

- Events: [a004_events.js](a004_events.js)