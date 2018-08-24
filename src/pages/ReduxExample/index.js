import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import './styles.css'
// Components
import HealthPlan from '../../components/HealthPlan/HealthPlan'

class ReduxExample extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="side-menu">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="side-menu-container">
                                <ul className="nav navbar-nav">
                                    <li><a href="#"><span className="glyphicon glyphicon-send"/> Link</a></li>
                                    <li className="active"><a href="#"><span
                                        className="glyphicon glyphicon-plane"/> Active Link</a></li>
                                    <li><a href="#"><span className="glyphicon glyphicon-cloud"/> Link</a></li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                ReduxExample
                <Link to={'/reduxexample/health-plan'}>Health plan</Link>
                <Switch>
                    <Route path={'/reduxexample/health-plan'} component={HealthPlan}/>
                </Switch>
            </div>
        );
    }
}

export default ReduxExample;