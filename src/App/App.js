import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../Components/navbar'
import { Main } from '../Components/main'

import '../scss/main.scss'
import { ReduxActions } from '../_actions';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' }
    }

    componentDidMount() {
        this.props.dispatch(ReduxActions.initialCheck())
    }

    render() {
        return (
            <div id="root">
                <NavBar />
                <div id="main_container">
                    <Main />
                </div>
            </div>
        );
    }
}


const connectedApp = connect()(App);
export { connectedApp as App }; 