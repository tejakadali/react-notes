import React from 'react';
import { connect } from 'react-redux';
import { NoteList } from '../Components/notelist'
import { ReduxActions } from '../_actions';
import moment from 'moment'
import { getHighlightedText } from '../_helpers'

class ViewNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // edit: false,
            filteredData: null,
            active_note: { note: '' },
            update: ''
        };
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.active != this.props.active) {
            this.setState({ active_note: nextProps.active })
        }

    }
    componentDidMount () {
        this.setState({ active_note: this.props.active })
    }

    editNote = () => {
        console.log(this.props.device)
        // this.setState({ edit: true })
        this.props.dispatch(ReduxActions.edit_View('EDIT'))  
        if (this.props.device_width <= 575) {
            this.props.dispatch(ReduxActions.toggleList('close'))
        }
    }
    handleChange = (evt, id) => {
        console.log("idd", id)
        const data = {
            id: id,
            timestamp: new Date(),
            note: evt.target.value
        }
        this.setState({ active_note: evt.target.value })
        this.props.dispatch(ReduxActions.updateNote(data))
    };

    render() {
        const { active_note } = this.state
        const { edit_view_toggle, query } = this.props
        console.log("abcd",active_note)
        return (
            <div id="view_note">
                <div className="time">
                    {(moment(active_note.timestamp).format("D-MMM-YY") + ' at ' + moment(active_note.timestamp).format("h:mmA"))}

                </div>
                <div className="spacing">
                    {edit_view_toggle=="VIEW" ?
                        <div id="view_note_in" onClick={this.editNote}>
                        {active_note.note == "" ? "Touch to start writing" : getHighlightedText(active_note.note, query)}
                        </div> :
                        <textarea
                            autoFocus={true}
                            onChange={(e) => this.handleChange(e, this.props.active.id)}
                            value={active_note.note}>
                        </textarea>}
                </div>
            </div>)
    }
}

function mapStateToProps(state) {
    const query = state.search_query;
    const { active, notes, device_width, edit_view_toggle } = state
    return {
        query, active, notes, device_width, edit_view_toggle
    };
}

const connectedLoginPage = connect(mapStateToProps)(ViewNote);
export { connectedLoginPage as ViewNote }; 