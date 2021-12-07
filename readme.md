# receipt-CLI

Helpers to create components, containers and pages into react projects.

Each new folder contains a **.jsx**, a **.test.js** and a **.scss** file inside.

To install: ```yarn global add receipt-cli``` or ```npm i -g receipt-cli```.

## Commands:

Start each command with ```rc```.

### :smiley: new:template `DIR` `NAME`
Creates a template into **DIR** folder named **NAME** (creates the folder if it doesn't exist).

```js
rc new:template src/lib Button // adds a template named Button into the folder src/lib
```

### :smiley: new:component `NAME`
Creates a new component into components folder (creates the folder if it doesn't exist).

```js
rc new:component Topbar // adds a component named Topbar into the components folder
```

### :smiley: new:container `NAME`
Creates a new container into containers folder (creates the folder if it doesn't exist).

```js
rc new:container Table // adds a container named Table into the containers folder
```

### :smiley: new:page `NAME`
Creates a new page into pages folder (creates the folder if it doesn't exist).

```js
rc new:page Home // adds a page named Home into the pages folder
```

### Support commands:
- ```rc -h``` opens help menu.
- ```rc -v``` returns cli version.


### Enjoy it! :facepunch:


Engineered by [gluegun](https://github.com/infinitered/gluegun).