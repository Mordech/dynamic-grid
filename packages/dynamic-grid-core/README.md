# Dynamic Grid Core

This package contains the core functionality for a Dynamic Grid.
The grid can be used to display a large number of elements in a compact and organized way, with the number of columns and rows adjusting dynamically based on the available space.

Installation
To use the dynamic grid in your web application, you can install the dynamic-grid-core package from yarn or npm:

```bash
yarn add @mordech/dynamic-grid-core
```

or

```bash
npm install @mordech/dynamic-grid-core
```

## calcColumns

This is a function that calculates the number of columns that can fit in a given space, taking into account the minimum width of each column, the width of the elements, and any gaps between the columns.

### Usage
To use this function, import it into your project and call it with an object that contains the following properties:

- `minWidth`: The minimum width of each column.

- `elementWidth`: The width of the elements that will be placed in the columns.

- `gap`: The gap between each column (optional, defaults to 0).

- `dividedBy`: The number to divide the number of columns by (optional, defaults to 1).

- `maxColumns`: The maximum number of columns that can be displayed (optional, defaults to Infinity).

- `scrollHint`: A number between 0 and 1 that indicates how much of the next column should be shown in a scroll (optional, defaults to 0).

The function returns the number of columns that can fit in the given space.

To import the calcColumns function into your project, you can follow these steps:

```js
import { calcColumns } from '@mordech/dynamic-grid-core';
```

You can now use the calcColumns function in your code.

Here is an example of how you could use the calcColumns function:

```js
import { calcColumns } from '@mordech/dynamic-grid-core';

const params = {
  minWidth: 100,
  elementWidth: 200,
  gap: 10,
  dividedBy: 2,
  maxColumns: 4,
  scrollHint: 0.5,
};

const numColumns = calcColumns(params);

console.log(numColumns); // Output: 2
```

## core.css

This file contains the core styles for a dynamic grid layout.

### Usage

To use the dynamic grid in your web application, you can import the `core.css` file into your project and use the `.grid` and `.is-scroll` classes.

To import the `core.css` file into your project:

```js
import '@mordech/dynamic-grid-core/css/core.css';
```

To use the `.grid` class, add it to the container element of the grid:

```html
<div class="grid">
  <!-- Grid elements -->
</div>
```

To use the `.is-scroll` class, add it to the container element of the grid when the grid is scrollable:

```html
<div class="grid is-scroll">
  <!-- Grid elements -->
</div>
```

### Custom Properties

The `core.css` file uses the following CSS custom properties (also known as CSS variables):

- `--dg-repeat-count`: Specifies the number of columns in the grid. Defaults to `auto-fit`.
- `--dg-min-width`: Specifies the minimum width of each grid element. Defaults to `200px`.
- `--dg-gap`: Specifies the gap between grid elements. Defaults to `unset`.
- `--dg-scroll-rows`: Specifies the number of rows in the scrollable grid. Defaults to `1`.
- `--dg-scroll-hint`: Specifies the number of columns to show as a hint when scrolling. Defaults to `0`.

These custom properties are used to define the grid layout and scroll behavior of the dynamic grid. They can be customized by setting their values in the CSS for the `.grid` and `.is-scroll` classes.

For example, to set the number of columns to 3 and the gap between elements to 10 pixels, you could add the following CSS:

```css
.grid {
  --dg-repeat-count: 3;
  --dg-gap: 10px;
}
```

### CSS modules

If you are using CSS modules in your project, you can import the `core.module.css` file instead of the `core.css` file:

```js
import '@mordech/dynamic-grid-core/css/core.module.css';
```

You can then use the `grid` and `isScroll` classes in your code:

```js
import styles from '@mordech/dynamic-grid-core/css/core.module.css';

<div className={styles.grid}>
  <!-- Grid elements -->
</div>
```

## Browser Support

The dynamic grid is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
