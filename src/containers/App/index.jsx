import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home'

class App extends Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/category" component={Home}/>
                    <Route path="/products" component={Home}/>
                </Switch>

            </div>
        );
    }
}
export default App;