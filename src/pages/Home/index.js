import React from 'react';
import ferrari from '../../assets/ferrari.jpeg'

class Home extends React.Component {
    render() {

        return (
            <div>
                Home
                <img src={ferrari}/>
            </div>
        );
    }
}
export default Home;