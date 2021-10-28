import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './utilities/routes';
import { Switch, Route } from 'react-router-dom';
import Page from './components/Page';

const children: JSX.Element[] = [];

function App() {
    for (const route of routes) {
        const Component: typeof React.Component = route.component as unknown as typeof React.Component;
        children.push(
            <Route exact={route.exact} path={route.path} key={route.path}>
                <Page>
                    <Component />
                </Page>
            </Route>,
        );
    }
    return (
        <Fragment>
            <Switch>{children}</Switch>
        </Fragment>
    );
}

export default App;
