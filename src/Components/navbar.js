import React from 'react';
import { connect } from 'react-redux';
import { ReduxActions } from '../_actions';
import { FaEdit, FaListAlt, FaTrashAlt, FaTimes } from 'react-icons/fa';
import uuidv1 from 'uuid/v1';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: null,
        };
    }
    componentDidMount() {
        this.props.dispatch(ReduxActions.handleSearchText(''))
    }
    componentDidUpdate() {
        this.props.dispatch(ReduxActions.handleSearchText(this.props.query))
    }

    handleChange = () => {
        const { value } = event.target
        this.props.dispatch(ReduxActions.handleSearchText(value))
    }
    clearQuery = () => {
        this.props.dispatch(ReduxActions.handleSearchTextReset())
    }
    newNote = () => {
        const data = {
            id: uuidv1(),
            timestamp: new Date(),
            note: ''
        }
        this.props.dispatch(ReduxActions.createNewNote(data))
    }

    deleteNote = () => {
        this.props.dispatch(ReduxActions.deleteNote())
    }

    toggleList = () => {
        this.props.dispatch(ReduxActions.toggleList())
    }

    render() {
        return (
            <div id="nav_main" >
                <div className="nav_1">
                    <span id="main_head"><span>React Redux Notes</span></span>
                    <div id="s_1">
                        <button className="note_btn" onClick={this.newNote}><FaEdit size={15} className="fa_icon" /></button>
                        <button className="note_btn" onClick={this.deleteNote}><FaTrashAlt size={15} className="fa_icon" /></button>
                    </div>
                </div>
                <div className="nav_2">
                    <div id="s_2">
                        <button className="side_btn note_btn" onClick={this.toggleList}>
                            <FaListAlt  className="fa_icon" />
                        </button>
                        <div id="search">
                        <input placeholder="Start Typing here to search notes.." onChange={this.handleChange} value={this.props.query} autoFocus />
                       {this.props.query!="" && 
                       <FaTimes
                        onClick={this.clearQuery}
                        class="clear" /> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const query = state.search_query;
    return {
        query
    };
}

const connectedLoginPage = connect(mapStateToProps)(NavBar);
export { connectedLoginPage as NavBar }; 