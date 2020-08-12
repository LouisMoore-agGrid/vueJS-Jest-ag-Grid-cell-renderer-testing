# ag-grid-test

This repository contains an ag-grid with a single column with a cell renderer.
The cell renderer renders the square of first 5 numbers.
It also has a single unit test which checks the value rendered inside the second column in the grid.

The main purpose of this repository is to show the discrepancy in unit tests between ag-grid versions.
Current version of ag grid is 23.2.1 and unit test for cell renderer is failing and the cell renderer is not being rendered in the test environment.
Downgrade the ag grid to version to 20.2 and the same test is passing.

Branch `ag-grid-version-20.2` has ag-grid version 20.2. Switch between the branches and try running the unit test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
