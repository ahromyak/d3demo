import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function FirstComponent(props) {
    return (<div>this is INTRO VIEW view
        <p>
            <Link to={'/reduxexample/health-plan?skipIntro=true'}>GO TO FORMS</Link>
        </p>
        - {props.text}</div>)
}

function SecondComponent(props) {
    return (<div>this is FORMVIEW view - {props.text}</div>)
}

function ThirdComponent(props) {
    return (<div>PENDING VIEW - {props.text}</div>)
}

function ForthComponent(props) {
    return (<div>GRACE VIEW - {props.text}</div>)
}

function FithComponent(props) {
    return (<div>This is ELIGIBLE VIEW -
        <p>
            <Link to={'/reduxexample/health-plan?skipIntro=true'}>GO TO FORMS</Link>
        </p>
        {props.text}</div>)
}

function SixthComponent(props) {
    return (<div>This is INELIGIBLE VIEW -
        <p>
            <Link to={'/reduxexample/health-plan?skipIntro=true'}>GO TO FORMS</Link>
        </p>
        {props.text}</div>)
}


const healthPlanViewsCollection = {
    INTRO: (props) => ({
        title: 'First Component',
        renderComponent: React.createElement(FirstComponent, {...props})
    }),
    FORMSVIEW: (props) => ({
        title: 'Second Component',
        renderComponent: React.createElement(SecondComponent, {...props})
    }),
    PENDING: (props) => ({
        title: 'Third Component',
        renderComponent: React.createElement(ThirdComponent, {...props})
    }),
    GRACE: (props) => ({
        title: 'Third Component',
        renderComponent: React.createElement(ForthComponent, {...props})
    }),
    ELIGIBLE: (props) => ({
        title: 'Third Component',
        renderComponent: React.createElement(FithComponent, {...props})
    }),
    INELIGIBLE: (props) => ({
        title: 'Third Component',
        renderComponent: React.createElement(SixthComponent, {...props})
    })
};


export default healthPlanViewsCollection;