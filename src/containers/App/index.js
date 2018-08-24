import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home'
import ReduxExample from '../../pages/ReduxExample'

import './styles.css'

class App extends React.Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/">Homes</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/reduxexample">profile</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/products">coaching</Link>
                            </li>
                        </ul>
                    </div>
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
