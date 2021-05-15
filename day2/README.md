# Navigating the Javascript 

* Javascript: the core language; sometimes referred to as vanilla javascript or vanilla JS. Everything else is built over it.

* ECMAScript: The browser specification of js language named after the European Computers Manufacturing Association. It is not the language itself but description that how js should be interpreted so that no matter what browser is used, it should get interpreted by every browser. ES6, ES2015, ES2017, ES2020, etc. refers to use features of ecma but not necessarily supported by modern browsers. Hence we have to use Babel.js converts the ecmascript to make it work in current browser implementations.

* Typescript: It is dialect of js. Extension .ts. Most developers dont like some parts of js and dont want it or they want some additional features where ts or coffeescript comes into play.

* Node.js: JS server runtime used to run js everywhere; used to run npm, webpack, babel, etc on system.

* ESLint helps automatically detect coding errors and can do basic cleanup automatically.


# Modern JavaScript Loading

Rendering refers to showing the output in the browser. 

## Default Behavior 

Browser stops rendering when js is encountered. Js is executed before rendering continues. Often referred to as content blocking. The following `+` shows the part being rendered:

<pre>
HTML Parsing ++++++++        +++++++++ 
JS Download          ++++
JS Execution             ++++
</pre>

`<script src="script.js"></script>`

## Async

Browser downloads js in parallel while HTML renders. When js is fully loaded, rendering stops while js is executed. The following `+` shows the part being rendered:

<pre>
HTML Parsing ++++++++    +++++++++ 
JS Download      ++++
JS Execution         ++++
</pre>

`<script src ="script.js" async></script>`

## Defer

Browser downloads js in parallel while HTML renders, then defers execution of js until HTML rendering is complete. The following `+` shows the part being rendered:

<pre>
HTML Parsing +++++++++++++++++ 
JS Download      ++++
JS Execution                  ++++
</pre>

`<script src ="script.js" defer></script>`

async/defer should be the standard. Only use render blocking when you have specific reason. Loading js in footer now is anti-pattern.

## JS modules

Say we created an object o1 in a file named obj.js, now to use it to another file script.js we need to add `export default o1;` in the end of obj.js and `import o1 from "./obj.js";` in the beginning of script file. Then we use `<script type = "module" src ="obj.js"></script>` followed by `<script type = "module" src ="dcript.js"></script>` in main HMTL. The o1 object will now won't be accessible from console.

## JS object

```js
const person ={
    name: "Araika Singh",
    identity:{
        occupation: "student",
        field: "computer science & Engineering",
    }
    favFood: "chocolates",
    jobStatus: true,
    toggleJobStatus: function(jobSt){
        this.jobStatus = jobSt;
    }
    updateIdentity: function(occ, fld){
        this.identity.occupation = occ,
        this.identity.field = fld
    }
}
```

## Template Literal

The back ticks indicate that the variable is a template literal. And we can inject the values of our objects in the template literal using ${}.

```js
const content = `${}`;
```

## Plain old string

${} wont work here. String doesn't accept any kind of template tags. Hence we have to use string concatenation.
 
```js
const content = "<h1>" + person.favFood + "<h1>";
```

## DOM: Document Object Model

When we present the web browser with an HTML document, it creates an object model(DOM). This DOM describes the hierarchical tree structure for that element, how the elements in the document are related to each other and nested. Eg: Document.querySelector() and Document.querySelectorAll() can help us traverse the DOM using js. They take CSS selector as a parameter within quotes.