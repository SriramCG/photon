import {StyleSheet} from 'react-native';
import Colors from '../utils/Colors';

const RecordAttendenceCellStyles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.dividerColor,
  },
  emptyContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {flex: 1, flexDirection: 'row'},
  singleView: {flex: 1},
  thumbnail: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
    margin: 5,
    justifyContent: 'flex-start',
  },
  textView: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  text: {
    fontSize: 16,
    margin: 1,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  image: {
    height: 600,
    width: '100%',
    resizeMode: 'cover',
  },
  titleView: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default RecordAttendenceCellStyles;
