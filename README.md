# The Craft of Coffee

## Table of Contents
1. [Tooling](#tooling)
2. [Development](#development)
  - [Build Tools](#build-tools)
  - [Folder Structure](#folder-structure)

## Tooling

The Craft of Coffee is built using the [Eleventy static site generator](https://www.11ty.io/). Eleventy was chosen due to its agnostic tooling decisions.

## Development

### Build tools

**Install dependencies**

```
npm install
```

**Build assets**
Compile Sass, transpile JavaScript, optimize images, and watch for changes inside of `/assets`.

```
npm start
```

**Eleventy server**
Spin up Eleventy server and watch for changes inside of `/views`.

```
npm run serve
```

### Folder Structure

```
thecraftofcoffee.com/
├── views/
│   ├── _data/
│   ├── _templates/
├── _site/
├── assets/
│   ├── images/
│   ├── js/
│   └── sass/
├── utils/
```

The `/views` folder contains all of the content for our Eleventy website. Inside of `/views/_data`, and `/views/_templates` we have our [global data files](https://www.11ty.io/docs/data-global/) and [templates](https://www.11ty.io/docs/templates/), respectively. All other files and folders inside of `/views` are [markdown](https://www.markdownguide.org/) content files.

**Note:** I have [configured Eleventy](https://www.11ty.io/docs/config/) to work with this set of folders so that content and templates are better organized and our root directory clean.

Our entire website gets compiled into static HTML inside of `/_static`. This folder is excluded from the git repository.

Inside of `/assets` exists all of our images, Sass and JavaScript files. All of these files get compiled into `/_static/dist/`.

All utility scripts for building the website live in `/utils`.
