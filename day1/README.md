# Day 1 js track

## Bundler

A JavaScript bundler is a tool that puts your code and all its dependencies together in one JavaScript file. There are many of them out there these days, being the most popular ones browserify and webpack. There was no `import` or `require` statements. Now we have the new ES2015 import statement but it is not widely implemented.

## Webpack

Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

### Core Concepts of webpack:

* Entry : An entry point indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). By default its value is ./src/index.js.

* Output : The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.

* Loaders : webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

* Plugins : plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

* Mode : By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.

* Browser compatibility :  ES5-compliant

### Basic setup

`npm init -y`
`npm install webpack webpack-cli --save-dev`

### Project structure

day1
  |- package.json
+ |- webpack.config.js
+ |- /dist
+   |- index.html
+ |- /src
+   |- index.js

To bundle the lodash dependency with index.js, we'll need to install the library locally:

`npm install --save lodash`


## Babel

Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. 

## Transpiling

Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language. Languages you write that transpile to JavaScript are often called compile-to-JS languages, and are said to target JavaScript. 

## Tree Shaking

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements in ES2015 to detect if code modules are exported and imported for use between JavaScript files. 

## Benefits of dead code elimination

In frontend development, modules are usually handled as follows:

* During development, code exists as many, often small, modules.
* For deployment, these modules are bundled into a few, relatively large, files.

The reasons for bundling are:

* Fewer files need to be retrieved in order to load all modules. This reason is more important for is important for HTTP/1, where the cost for requesting a file is relatively high. That will change with HTTP/2, which is why this reason doesn’t matter there.

* Compressing the bundled file is slightly more efficient than compressing separate files. (Two types of compression.)

* During bundling, unused exports can be removed, potentially resulting in significant space savings. It can only be achieved with a module format that has a static structure.