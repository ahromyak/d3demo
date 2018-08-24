import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                Coaching Program
                <Link to={'/reduxexample/health-plan?skipIntro=true'}>Go with skip</Link>
            </div>
        );
    }
}
export default Home;