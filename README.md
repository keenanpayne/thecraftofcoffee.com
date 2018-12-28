# The Craft of Coffee

## Tooling

The Craft of Coffee is built using the [Eleventy static site generator](https://www.11ty.io/).

## Development

Install dependencies

```
npm install
```

Build assets - compile Sass, transpile JavaScript, and optimize images.

```
npm start
```

Spin up Eleventy server and watch for changes.

```
npm run serve
```

## Folders

```
thecraftofcoffee.com/
├── _content/
│   ├── _data/
│   ├── _includes/
│   ├── blog/
│   └── learning/
├── _site/
├── assets/
│   ├── images/
│   ├── js/
│   └── sass/
├── utils/
```

The `_content` folder contains all of the content for our Eleventy website. Inside of `_content/_data`, and `_content/_includes` we have our [global data files](https://www.11ty.io/docs/data-global/) and [templates](https://www.11ty.io/docs/templates/), respectively. All other files and folders inside of `_content` are [markdown](https://www.markdownguide.org/) content files.

**Note:** Note how the `_content` architecture is not the 11ty default and explain why I made these decisions. 
