# DynamicGrid Web Component

The `mrd-dynamic-grid` component is a web component built with LitElement that allows for dynamic grid layouts. It uses the [`@mordech/dynamic-grid-core`](https://www.npmjs.com/package/@mordech/dynamic-grid-core) library to calculate the number of columns based on the available space and the minimum column width.

## Installation

To use the `mrd-dynamic-grid` component, you can install it via npm:

```bash
npm install @mordech/dynamic-grid-web
```

## Usage

To use the `mrd-dynamic-grid` component, you can import it and use it like any other web component:

```html
<!doctype html>
<html>
  <head>
    <script type="module">
      import '@mordech/dynamic-grid-web';
    </script>
  </head>
  <body>
    <mrd-dynamic-grid
      mincolumnwidth="200px"
      gridtype="auto-fill"
      gap="20px"
      maxcolumns="4"
      dividedby="2"
      isscroll="true"
      scroll-options='{"hint":100,"hideScrollbar":true,"rows":5,"scrollSnapAlign":"start"}'
    >
      <!-- Your grid items here -->
    </mrd-dynamic-grid>
  </body>
</html>
```

## Attributes

The `mrd-dynamic-grid` component accepts the following attributes:

- `minColumnWidth` (required): The minimum width of each column. This can be any valid CSS length value in `rem` or `px`, such as `200px` or `10rem`.
- `gridType` (optional): The type of grid to use. This can be either `auto-fill` or `auto-fit`. Defaults to `auto-fill`.
- `gap` (optional): The gap between each grid item. This can be any valid CSS length value, such as `20px` or `2rem`. Defaults to `0`.
- `maxColumns` (optional): The maximum number of columns to display. If there is not enough space for this many columns, the grid will shrink to fit.
- `dividedBy` (optional): The number to divide the available space by to calculate the number of columns. Defaults to `1`.
- `shrink` (optional): Makes the grid shrink to fit below the minimum width. Defaults to `true`.
- `isScroll` (optional): Whether to enable scrolling. Defaults to `false`.
- `scrollOptions` (optional): An object containing options for scrolling. This object can have the following properties:
  - `hint`: The number of pixels to show before and after the visible area. Defaults to `0`.
  - `hideScrollbar`: Whether to hide the scrollbar. Defaults to `false`.
  - `rows`: The number of rows to display. Defaults to `1`.
  - `scrollSnapAlign`: The alignment of the scroll snap points. Can be either `start`, `center`, `end`, or `none`. Defaults to `start`.

## License

This component is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
