# Tech News Asia

## Overview

A 2-page, static news site on tech startups in Asia. Built with JavaScript, [Webpack 5](https://webpack.js.org/) and [Sass](https://sass-lang.com/).

## Highlights

### Webpack configuration

The following webpack plugins were installed:

#### [raw-loader](https://webpack.js.org/loaders/raw-loader/)

Imports files as a String. I use it together with [insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) to render the navbar dropdown button as an `svg` HTML element:

```js
import svg from "./hamburger.svg";
let dropdownButton = document.getElementById("dropdown-button-wrapper");
dropdownButton.insertAdjacentHTML("afterbegin", svg);
```

The result:

![svg](./demo/svg.png)

By rendering it this way, I can select the svg element in my `scss` file and change its color through the `fill` style attribute.

Configuration in `webpack.config.js`:

```js
module: {
  rules: [
    {
      test: /\.svg$/i,
      use: "raw-loader",
    },
  ];
}
```

### Single-page web app

### Mobile navbar

A news site about tech stuff in Asia. A project that enables me to recap what I learned from The Odin Project about Webpack and a few other minor things I picked up along the way such as...

- Prettier
- Pure JavaScript, no jQuery
- Git using Bash
