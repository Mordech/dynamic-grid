# Dynamic Grid Component

Welcome to the Dynamic Grid Component repository! This project provides a set of components for creating dynamic grid layouts, suitable for a variety of web applications. It is composed of three packages:

- **Core Library**: [`dynamic-grid-core`](./packages/dynamic-grid-core/README.md)
- **Web Component**: [`dynamic-grid-web`](./packages/dynamic-grid-web/README.md)
- **React Component**: [`dynamic-grid-react`](./packages/dynamic-grid-react/README.md)

## Overview

The Dynamic Grid Component is designed to provide a flexible and easy-to-use grid layout system. By leveraging the core library, the web component, and the React component, developers can create responsive and adaptive grid layouts that adjust based on the available space and specified parameters.

### Packages

#### `dynamic-grid-core`

The core library that contains the fundamental logic for calculating grid layouts. It ensures that the grid adapts to the available space by adjusting the number of columns based on the minimum column width.

For more details, refer to the [`dynamic-grid-core` README](./packages/dynamic-grid-core/README.md).

#### `dynamic-grid-web`

A web component built with LitElement, allowing for dynamic grid layouts in any web application. This component utilizes the core library to handle the layout calculations.

For more details, refer to the [`dynamic-grid-web` README](./packages/dynamic-grid-web/README.md).

#### `dynamic-grid-react`

A React component that integrates seamlessly with React applications, providing the same dynamic grid functionality. This component also relies on the core library for layout calculations.

For more details, refer to the [`dynamic-grid-react` README](./packages/dynamic-grid-react/README.md).

## Installation

Each package can be installed individually via npm. Depending on your needs, you can choose to install one or more of the packages.

### Core Library

```bash
npm install @mordech/dynamic-grid-core
```

### Web Component

```bash
npm install @mordech/dynamic-grid-web
```

### React Component

```bash
npm install @mordech/dynamic-grid-react
```

## Contributions

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of this page to create a copy of the repository in your GitHub account.

2. **Clone your fork**: Use `git clone` to clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/dynamic-grid-component.git
   ```

3. **Install dependencies**: Navigate to the project directory and install the dependencies.

   ```bash
   yarn install
   ```

4. **Set up Husky**: Initialize Husky to ensure pre-commit hooks are set up correctly.

   ```bash
   yarn husky install
   ```

5. **Create a new branch**: Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b my-new-feature
   ```

6. **Make your changes**: Implement your feature or bug fix.

7. **Commit your changes**: Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) when committing changes.

8. **Push to the branch**: Push your changes to your forked repository.

   ```bash
   git push origin my-new-feature
   ```

9. **Create a Pull Request**: Open a pull request in the original repository. Provide a clear description of your changes and why they are necessary.

As this project is maintained by a solo maintainer, please be patient while your pull request is reviewed. Ensure your code follows the project's coding standards and includes appropriate tests. If you need any help or have questions, feel free to open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
