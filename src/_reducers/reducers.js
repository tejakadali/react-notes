
export function search_query(state = '', action) {
  switch (action.type) {
    case 'SEARCH_TEXT':
      return action.text
    case 'SEARCH_TEXT_RESET':
      return ''
    default:
      return state
  }
}

export const active = (state = '', action) => {
  switch (action.type) {
    case 'ACTIVE_NOTE':
      return action.data;
    default:
      return state;
  }
}

export const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [action.data, ...state];
    case 'UPDATE_NOTE':
      return state.map((note) => {
        if (note.id === action.data.id) {
          return {
            ...note,
            note: action.data.note,
            timestamp: action.data.timestamp
          }
        } else return note;
      })
    case 'DELETE_NOTE':
      return state.filter((note) => note.id !== action.active_id);
    default:
      return state;
  }
}

export const edit_view_toggle = (state = 'EDIT', action) => {
  switch (action.type) {
    case 'EDIT':
      return 'EDIT';
    case 'VIEW':
      return 'VIEW'
    default:
      return state;
  }
}

export const toggle_list_view = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_LIST':
      if (action.status == "close") {
        return false;
      }
      else if (action.status == "open") {
        return true
      }
      return !state;
    default:
      return state;
  }
}

export const device_width = (state = '', action) => {
  switch (action.type) {
    case 'DEVICE_WIDTH':
      return action.width
    default:
      return state;
  }
}


export const filteres_notes = (state = '', action) => {
  switch (action.type) {
    case 'FILTERED_NOTES':
      return action.notes_filtered
    default:
      return state;
  }
}

