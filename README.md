# ag-grid-test

This repository contains an example showing how we can test cell renderers with Jest when using them in ag-Grid. The reason testing cell renderers can cause issues are due to the grids animation frames when starting, this throws off the timing of the tests, which get called just before the cell renderers have rendered their values. To workaround this, we can make use of a setTimeout of 10 secons when doing tests involving cell renderers as shown in the example.spec.js file or we can add the "suppressAnimationFrame" grid property to the grid.

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
