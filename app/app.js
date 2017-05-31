import React, { Component } from 'react';

import { Route, Switch, Link } from 'react-router-dom';

const Home = () => <div>Home</div>;
const Hello = ({ match }) => <div>Hello {match.params.name}</div>;
const NotFound = () => <div>404 - Page not found</div>;

class App extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hello/Tom">Hello</Link></li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hello/:name" component={Hello} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

module.exports = App;
