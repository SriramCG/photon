import * as albumActions from '../actions/album.actions.js';

const album = (
  state = {
    albumLoading: false,
    albumError: null,
    albumStatus: '',
    albumData: [],
  },
  action,
) => {
  switch (action.type) {
    //Reducers for Get Album Details
    case albumActions.GET_ALBUM_DETAILS_REQUEST:
      return Object.assign({}, state, {
        albumLoading: true,
        albumStatus: action.status,
      });

    case albumActions.GET_ALBUM_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        albumData: action.albumData,
        albumLoading: false,
        albumStatus: action.status,
      });

    case albumActions.GET_ALBUM_DETAILS_FAILURE:
      return Object.assign({}, state, {
        albumError: action.error,
        albumLoading: false,
        albumStatus: action.status,
      });
    default:
      return state;
  }
};
export default album;
