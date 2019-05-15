
function initialCheck() {
    return (dispatch, getState) => {
        if (getState().notes.length != 0) {
            dispatch({ type: 'ACTIVE_NOTE', data: getState().notes[0] });
        }
    };
}

function handleSearchText(query) {
    return (dispatch, getState) => {
        dispatch({ type: 'SEARCH_TEXT', text: query });
        dispatch({ type: 'VIEW' })
        let { notes } = getState()
        let notes_filtered = notes.filter(data => {
            return data.note.toLowerCase().indexOf(query) != -1
        })
        dispatch({ type: 'FILTERED_NOTES', notes_filtered })
        if (notes_filtered.length != 0) dispatch({ type: 'ACTIVE_NOTE', data: notes_filtered[0] })
    };
}

function handleSearchTextReset() {
    return dispatch => {
        dispatch({ type: 'SEARCH_TEXT_RESET' });
    };
}

function createNewNote(data) {

    return (dispatch, getState) => {
        dispatch({ type: 'ADD_NOTE', data });
        dispatch({ type: 'ACTIVE_NOTE', data })
        if (!getState().toggle_list_view) {
            dispatch({ type: 'TOGGLE_LIST', status: true })
        }
        dispatch({ type: 'FILTERED_NOTES', notes_filtered: getState().notes })
    };
}

function updateNote(data) {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_NOTE', data });
        dispatch({ type: 'FILTERED_NOTES', notes_filtered: getState().notes })
    };
}

function deleteNote() {
    return (dispatch, getState) => {
        const active_id = getState().active.id
        const notes_array = getState().notes
        // const activee = notes_array.find((val) => {
        //     return val.id == active_id
        // });
        const active_index = notes_array.findIndex(val => val.id == active_id)
        let i = active_index
        function nextItem() {
            i = i + 1; // increase i by one
            i = i % notes_array.length; // if we've gone too high, start from `0` again
            return notes_array[i]; // give us back the item of where we are now
        }
        let nextElem = nextItem()
        dispatch({ type: 'DELETE_NOTE', active_id });
        dispatch({ type: 'ACTIVE_NOTE', data: nextElem })

        if (!getState().toggle_list_view) {
            dispatch({ type: 'TOGGLE_LIST', status: true })
        }
        dispatch({ type: 'FILTERED_NOTES', notes_filtered: getState().notes })
    }

};

function openNote(data) {
    return (dispatch) => {
        dispatch({ type: 'ACTIVE_NOTE', data })
    }
}

function toggleList(status) {
    return dispatch => {
        dispatch({ type: 'TOGGLE_LIST', status })
    }
}

function deviceWidth(width) {
    return dispatch => {
        dispatch({ type: 'DEVICE_WIDTH', width })
    }
}

function edit_View(state) {
    return dispatch => {
        dispatch({ type: state })
    }
}


export const ReduxActions = {
    initialCheck, handleSearchText, handleSearchTextReset, createNewNote, updateNote, deleteNote, openNote, toggleList, deviceWidth, edit_View
};
