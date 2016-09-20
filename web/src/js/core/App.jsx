import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='address' component={Address}>
                        <IndexRoute component={TwitterFeed} />
                        <Route path='instagram' component={Instagram} />
                    </Route>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/address'>Address</Link>
    </div>
);

const Container = (props) => <div>
    <Nav />
    {props.children}
</div>;

const Instagram = () => <h3>Instagram Feed</h3>;
const TwitterFeed = () => <h3>Twitter Feed</h3>;
const Home = () => <h1>Hello from Home!</h1>;
const NotFound = () => <h1>404.. This page is not found!</h1>;
const Address = (props) => <div>
    <br />
    <Link to='/address'>Twitter Feed</Link>&nbsp;
    <Link to='/address/instagram'>Instagram Feed</Link>
    <h1>We are located at 555 Jackson St.</h1>
    {props.children}
</div>;

export default App