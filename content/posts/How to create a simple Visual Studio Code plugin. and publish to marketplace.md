---
title: How to create a simple Visual Studio Code plugin. and publish to marketplace
subtitle: 
featured: true
section: content
tags: [accessibility]
date: "2020-12-03T00:00:00Z"
published: true
author:
  name: Georgi Kurian
  picture: '/assets/authors/georgi.jpg'
ogImage:
  url: /assets/blog/career-cover.jpg
coverImage: /assets/blog/career-cover.jpg
excerpt: Basic things to do as developer to get better accessible web pages.
---
## Why did I build it?

When I started using Laravel in vs code the default code suggestion and intelligence were not that much helpful. Then I found this amazing package barryvdh/laravel-ide-helper which generates helper files for Laravel - Facades, Models, and Macros.

The package adds some artisan commands to generate these helper files for the project, but I have to manually run it from time to time to generate updated helper files. That gave me the idea of running these commands on save using vs code plugin. But most of the plugins I tried for Run on Save didn't work quite well.

All the things gave me the idea for a VS Code extension similar to extension Php Artisan so that developers can just install a plugin and forget about all the configuration and things.

## Tech used
Node
TypeScript
Mocha - For testing
Building
Start from the helloworld-test-sample provided. VS Code Tutorial

```sh
git checkout https://github.com/microsoft/vscode-extension-samples/tree/master/helloworld-test-sample
```

Start by changing package.json version, publisher, extension name... .Go to file src/extension.ts and you will find a function activate which is the entry point of extension after extension gets activated. From there you can use vs code API use all the capabilities given by them vs code api.

I have used the following apis for laravel-ide-helper plugin:

* commands.registerCommand : Registers vs code commands and the action for that commands
* window.createOutputChannel : To print to vs code extension output channel.
* workspace.onDidSaveTextDocument : To trigger helper file generating commands
* window.workspace.onDidChangeConfiguration : To get configuration files when updated.
* You can use javscript console.log statement for debugging purposes as vs code have a console to show the console log.

## Publishing & Continous Integration
You can publish using vsce command line package. You need to get a personal access token from azure with permission to deploy to vs code market place. You can use Githhub actions or Azure devops pipelines for integration testing and auto deployments. Both the platforms provide a way to store the secret Persoanl Acces Token in the configuration without any security risk.

Market place Link

GitHub Link
```jsx
import React from "react";

const CoolComponent = () => <div>I'm a cool component!!</div>;

export default CoolComponent;
```
