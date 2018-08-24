import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {parse} from 'query-string';

import healthPlanViewsCollection from '../../utils/viewCollection';
import returnViewByStatus from '../../utils/returnViewByStatus';
import {switchToView} from '../../actions/index'

class HealthPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {

        if (this.checkIfIntroShouldBeSkipped()) {
            this.props.switchToView('FORMSVIEW');
        }else{
            const whatToShow = returnViewByStatus(this.props.eligibilityStatus);
            this.props.switchToView(whatToShow);
        }
    }

    componentDidUpdate(){
        if (this.checkIfIntroShouldBeSkipped()) {
            this.props.switchToView('FORMSVIEW');
        }
        console.log('ooooo')
    }

    checkIfIntroShouldBeSkipped(){
        const shoulwSkippIntro = parse(this.props.location.search);
        return shoulwSkippIntro.skipIntro;
    }

    renderSubComponent() {
        return healthPlanViewsCollection[this.props.switchtype]({text: 'added text by props'});
    }

    render() {
        const {title, renderComponent} = this.renderSubComponent();

        return (
            <div>
                <h1>{title}</h1>
                {renderComponent}
                <button onClick={() => {
                    this.props.switchToView('PENDING')
                }}>Swicth view
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        switchtype: state.switchview.switchtype,
        eligibilityStatus: state.switchview.eligibilityStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchToView: bindActionCreators(switchToView, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HealthPlan);