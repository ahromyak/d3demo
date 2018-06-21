import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home'
import ReduxExample from '../../pages/ReduxExample'

import './styles.css'

class App extends React.Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/reduxexample">Category</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/reduxexample" component={ReduxExample}/>
                    <Route path="/products" component={Home}/>
                </Switch>

            </div>
        );
    }
}
export default App;
