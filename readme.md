# receipt-CLI

Helpers to create components, containers and pages into react projects.

Each new folder contains a **.jsx**, a **.test.js** and a **.scss** files inside.

To install: ```yarn global add receipt-cli``` or ```npm i -g receipt-cli```.

## Commands:

Start each command with ```rc```.

### :smiley: new:template `DIR` `NAME`
Creates a template into **DIR** folder named **NAME** (creates the folder if it doesn't exist).

```js
rc new:template src/lib Button // creates Button folder into the respective DIR
```

### :smiley: new:component `NAME`
Creates a new component into components folder (creates the folder if it doesn't exist).

```js
rc new:component Topbar // creates Topbar component folder into components folder
```

### :smiley: new:container `NAME`
Creates a new container into containers folder (creates the folder if it doesn't exist).

```js
rc new:container Table // creates Table container folder into containers folder
```

### :smiley: new:page `NAME`
Creates a new page into pages folder (creates the folder if it doesn't exist).

```js
rc new:page Profile // creates Profile page folder into pages folder
```

### Others commands:
- ```rc -h``` opens help menu.
- ```rc -v``` returns cli version.

## Options:

### :wink: ```--named```
Set **.jsx** and **.test.js** file names as `NAME` parameter.

```js
rc new:component Topbar --named // creates Topbar.jsx, Topbar.test.js and style.scss into Topbar folder
```

### Enjoy it! :facepunch:


Engineered by [gluegun](https://github.com/infinitered/gluegun).