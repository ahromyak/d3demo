import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {parse} from 'query-string';

const eligibilityStatus = 'incomplete';
import returnViewByStatus from '../../utils/returnViewByStatus';
import healthPlanViewsCollection from '../../utils/viewCollection';
import {switchView} from '../../actions/index'

class HealthPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subComponent: returnViewByStatus(eligibilityStatus)
        };
        this.switchView = this.switchView.bind(this);
    }

    componentWillMount() {
        const shoulwSkippIntro = parse(this.props.location.search);
        if(shoulwSkippIntro.skipIntro){
            this.setState({subComponent: 'FORMSVIEW'})
        }
    }

    renderSubComponent(){
       return healthPlanViewsCollection[this.state.subComponent]({text:'added text by props'});
    }

    switchView(view) {
        this.setState({subComponent: view})
    }

    render() {
        const { title, renderComponent } = this.renderSubComponent();

        return (
            <div>
                <h1>{title}</h1>
                {renderComponent}
                <button onClick={()=>{this.switchView('PENDING')}}>Swicth view</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state.switchview.switchtype
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchView: bindActionCreators(switchView , dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HealthPlan);