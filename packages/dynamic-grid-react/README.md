# DynamicGrid Component

The `DynamicGrid` component is a React component that allows for dynamic grid layouts. It uses the [`@mordech/dynamic-grid-core`](https://www.npmjs.com/package/@mordech/dynamic-grid-core) library to calculate the number of columns based on the available space and the minimum column width.

## Installation

To install the `DynamicGrid` component, you can use `npm` or `yarn`:

```bash
npm install @mordech/dynamic-grid-react
```

```bash
yarn add @mordech/dynamic-grid-react
```

## Usage

To use the `DynamicGrid` component, you can import it and use it like any other React component:

```jsx
import { DynamicGrid } from '@mordech/dynamic-grid-react';

function MyComponent() {
  return (
    <DynamicGrid
      minColumnWidth="200px"
      gridType="auto-fill"
      gap="20px"
      maxColumns={4}
      dividedBy={2}
      scrollOptions={{
        hint: 100,
        hideScrollbar: true,
        rows: 5,
        scrollSnapAlign: 'start',
      }}
      isScroll={true}
    >
      {/* Your grid items here */}
    </DynamicGrid>
  );
}
```

## Props

The `DynamicGrid` component accepts the following props:

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
