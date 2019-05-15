import React from 'react';
import { connect } from 'react-redux';
import { ReduxActions } from '../_actions';
import classnames from 'classnames'
import moment from 'moment'

class NoteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredData: null,
        };
    }
    openNote = (obj) => {
        const { dispatch } = this.props
        dispatch(ReduxActions.openNote(obj))
        dispatch(ReduxActions.edit_View(obj.note == "" ? 'EDIT' : 'VIEW'))
        if (this.props.device_width <= 575) {
            this.props.dispatch(ReduxActions.toggleList('close'))
        }
    }

    render() {
        const { filteres_notes, active } = this.props

        return (
            <React.Fragment>
                {filteres_notes.length == 0 ? <div>No notes found</div> :
                    filteres_notes.map(obj => {
                        return <div className={classnames('card', { 'active': active.id == obj.id })}
                         onClick={() => this.openNote(obj)}
                         >
                            <span className="card_text">
                                {obj.note == "" ? "New note" : obj.note}
                                <div className="time">{moment(obj.timestamp).format("h:mmA")}</div>
                            </span>
                        </div>
                    })}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { filteres_notes, active, device_width } = state;
    return {
        filteres_notes, active, device_width
    };
}

const connectedLoginPage = connect(mapStateToProps)(NoteList);
export { connectedLoginPage as NoteList }; 