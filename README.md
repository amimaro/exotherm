# generator-exotherm [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/amimaro/generator-vuepress)
> Ionic + Firebase App Generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-exotherm using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-exotherm
npm install -g ionic
```

Then generate your new project:

```bash
yo exotherm
```

## Firebase API Key

Follow step 1 and 2 from this [tutorial](https://firebase.google.com/docs/web/setup) and copy the API Key snippet to `src/app/app.module.ts`.

Example:
```
export const firebaseConfig = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  projectId: "<PROJECT_ID>",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
};
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [amimaro](amimaro.github.io)


[npm-image]: https://badge.fury.io/js/generator-exotherm.svg
[npm-url]: https://npmjs.org/package/generator-exotherm
[travis-image]: https://travis-ci.org/amimaro/generator-exotherm.svg?branch=master
[travis-url]: https://travis-ci.org/amimaro/generator-exotherm
[daviddm-image]: https://david-dm.org/amimaro/generator-exotherm.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/amimaro/generator-exotherm
