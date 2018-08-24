import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {parse} from 'query-string';

// const eligibilityStatus = 'incomplete';
import returnViewByStatus from '../../utils/returnViewByStatus';
import healthPlanViewsCollection from '../../utils/viewCollection';
import {switchToView} from '../../actions/index'

class HealthPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // subComponent: returnViewByStatus(props.eligibilityStatus)
        };
    }

    componentWillMount() {
        const shoulwSkippIntro = parse(this.props.location.search);
        if (shoulwSkippIntro.skipIntro) {
            this.props.switchToView('FORMSVIEW');
        }
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