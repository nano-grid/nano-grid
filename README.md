# Nano grid

[![Nano Grid Logo](https://nano-grid.github.io/img/preview.png)](https://nano-grid.github.io)
> Frontend toolkit powered by CSS and Javascript.

## Getting Starter

- Install with [yarn](https://yarnpkg.com/):

  ```sh
  yarn add nano-grid
  ```

- Install with [npm](https://www.npmjs.com/):

  ```sh
  npm install nano-grid
  ```

- Clone the repo:

  ```sh
  git clone https://github.com/nano-grid/nano-grid
  ```

## Registering Components

In your Javascript:

```js
import "nano-grid/components";
```

In your Sass:

```css
@import "nano-grid/scss/nano-grid";
```

Test the following structure in your project:

```html
<nn-row>
  <nn-column size="35">
    <span class="nn-label nn-burn-orange">35px</span>
  </nn-column>
  <nn-column size="50%">
    <span class="nn-label nn-silver">50%</span>
  </nn-column>
  <nn-column size="1/2 - 50 * 2">
    <span class="nn-label nn-burn-orange">calc(50% - 100px)</span>
  </nn-column>
  <nn-column size="65">
    <span class="nn-label">65px</span>
  </nn-column>
</nn-row>
```

> For full documentation, visit [nano-grid.github.io](https://nano-grid.github.io).

## Creator

**Miguel Rivas**

- [Portfolio](https://miguel-rivas.github.io)
- [Github](https://github.com/jmiguelrivas)