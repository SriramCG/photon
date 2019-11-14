//Constants Declaration
export const GET_ALBUM_DETAILS_REQUEST = 'GET_ALBUM_DETAILS_REQUEST';
export const GET_ALBUM_DETAILS_SUCCESS = 'GET_ALBUM_DETAILS_SUCCESS';
export const GET_ALBUM_DETAILS_FAILURE = 'GET_ALBUM_DETAILS_FAILURE';
export const REQUESTING = 'requesting';
export const SUCCESS = 'success';
export const ERROR = 'error';

//Actions for get Album
export function getAlbumDetailsRequest() {
  return {
    type: GET_ALBUM_DETAILS_REQUEST,
    status: REQUESTING,
  };
}

export function getAlbumDetailsSuccess(albumData) {
  return {
    type: GET_ALBUM_DETAILS_SUCCESS,
    status: SUCCESS,
    albumData,
  };
}

export function getAlbumDetailsFailure(error) {
  return {
    type: GET_ALBUM_DETAILS_FAILURE,
    status: ERROR,
    error,
  };
}

// Actions Creator for Get Album
export function getAlbumDetails() {
  return async (dispatch, getState, api) => {
    dispatch(getAlbumDetailsRequest());
    try {
      const result = await api.get('photos');
      const resultJson = await result.json();
      if (result.errorCode > 400) {
        throw new Error('Error');
      }
      dispatch(getAlbumDetailsSuccess(resultJson));
    } catch (e) {
      dispatch(getAlbumDetailsFailure(e.message));
    }
  };
}
