# Get started

```
git clone https://github.com/ksyunnnn/react-starter
cd react-starter
yarn
# or npm install
yarn start
# or npm start
# access http://localhost:3000/
```

# package.json
```
{
  "name": "react-starter",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.4",
    "semantic-ui-css": "^2.3.1",
    "semantic-ui-react": "^0.79.1",
    "styled-components": "^3.2.6"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

```

# Routing

```
import {HashRouter, Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";

<Switch>
  {[
    {
      path: '/',
      component: Root,
    },
    {
      path: '/about',
      component: About,
    },
  ].map((v,i) => {
    return <Route key={i} exact path={v.path} component={v.component} />;
  })}
</Switch>
```
