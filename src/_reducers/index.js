import { combineReducers } from 'redux';

import { search_query, notes, active, toggle_list_view, device_width, filteres_notes, edit_view_toggle } from './reducers';

const rootReducer = combineReducers({
  search_query, notes, active, toggle_list_view, device_width, filteres_notes, edit_view_toggle
});

export default rootReducer;