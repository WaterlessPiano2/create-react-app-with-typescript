# Create React App example with TypeScript and Material UI

This project is set up using [Material UI boilerplate](https://github.com/mui-org/material-ui/tree/master/examples/create-react-app-with-typescript). I chose this as it has most of my the librarys I wanted to use, pre-installed, configured and ready to go.

This project talso uses the [Material UI Dashboard Template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard).

The aim of this project is to re-create [the Kubernetes Web UI Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/).

## How to use

Install it and run:

```sh
npm install
npm start
```

or:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui-org/material-ui/tree/master/examples/create-react-app-with-typescript)

## The idea behind the example

This example demonstrates how you can use [Create React App](https://github.com/facebookincubator/create-react-app) with [TypeScript](https://github.com/Microsoft/TypeScript) and [Material UI](https://github.com/mui-org/material-ui).

## Todos

- [ ] create mock data
- [ ] click on side panel to show different table/graphs
- [ ] replace the "Recent Deposits" card with another graph
- [ ] replace graphs with moving graphs. 
- [ ] update graph labels and styling
- [ ] update the table header and contents
- [ ] immitate rest of the styling from [the Kubernetes Web UI Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
- [ ] Host it
- [ ] re-structure the src folder in to other folders

### Bonus points

- [ ] Use React context to share data across components
- [ ] replace graph with a basic svg/canvas one rather than recharts 