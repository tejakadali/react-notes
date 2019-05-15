import React from 'react';
import { connect } from 'react-redux';
import { NoteList } from '../Components/notelist'
import { ReduxActions } from '../_actions';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: null,
        };
    }

    render() {
        return (
            <div id="side_bar">
                <div className="mask">
               <NoteList /> 
                </div>
            </div>
        );
    }
}


const connectedLoginPage = connect()(SideBar);
export { connectedLoginPage as SideBar }; 