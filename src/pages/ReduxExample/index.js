import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components
import HealthPlan from '../../components/HealthPlan/HealthPlan'

class ReduxExample extends React.Component {
    render() {

        return (
            <div>
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