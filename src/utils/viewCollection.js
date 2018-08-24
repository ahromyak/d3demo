import React from 'react';

function FirstComponent(props){
    return (<div>hello1  - {props.text}</div>)
}

function SecondComponent(props){
    return (<div>hello2 - {props.text}</div>)
}

function ThirdComponent(props){
    return (<div>hello3 - {props.text}</div>)
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
        renderComponent: React.createElement(ThirdComponent, {...props})
    }),
    ELIGIBLE: (props) => ({
        title: 'Third Component',
        renderComponent: React.createElement(ThirdComponent, {...props})
    }),
    INELIGIBLE: (props) => ({
        title: 'Third Component',
        renderComponent: React.createElement(ThirdComponent, {...props})
    })
};


export default healthPlanViewsCollection;