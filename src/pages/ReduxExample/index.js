import React from 'react';
import Footer from '../../components/demo/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

class ReduxExample extends React.Component {
    render() {

        return (
            <div>
                ReduxExample

                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}
export default ReduxExample;