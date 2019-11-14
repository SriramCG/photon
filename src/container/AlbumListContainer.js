import {connect} from 'react-redux';
import ListScreen from '../components/ListScreen';
import {getAlbumDetails} from '../actions/album.actions';

const mapStateToProps = state => {
  return {
    albumData: state.album.albumData,
    albumError: state.album.albumError,
    albumStatus: state.album.albumStatus,
    albumLoading: state.album.albumLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAlbumDetails: () => {
      dispatch(getAlbumDetails());
    },
  };
};

const AlbumListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListScreen);
export default AlbumListContainer;
