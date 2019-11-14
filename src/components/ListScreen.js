import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {BASE_URL} from '../utils/constants';
import styles from '../styles/ListScreenStyles';
import PropTypes from 'prop-types';

export default class ListScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      albumData: [],
    };
  }

  componentDidMount() {
    this.props.getAlbumDetails();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.albumData !== prevState.albumData) {
      return {albumData: nextProps.albumData};
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.albumData !== this.props.albumData) {
      this.setState({albumData: this.props.albumData});
    }
  }

  renderSeparator = () => {
    return <View style={styles.divider} />;
  };

  renderFlatList = () => {
    if (this.state.albumData && this.state.albumData.length) {
      return (
        <FlatList
          bounces={false}
          data={this.state.albumData}
          contentContainerStyle={{paddingHorizontal: 5}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `key-${item.id}`}
          renderItem={({item}) => this.renderListItem(item)}
          ItemSeparatorComponent={this.renderSeparator}
          initialNumToRender={10}
        />
      );
    } else {
      return (
        <View style={styles.emptyContainer}>
          <Text>{'No Albums Found.'}</Text>
        </View>
      );
    }
  };

  renderListItem = item => {
    return (
      <View>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => this.onPress(item)}>
          <View style={styles.singleView}>
            <Image source={{uri: item.thumbnailUrl}} style={styles.thumbnail} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text} numberOfLines={5} ellipsizeMode="tail">
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  onPress = item => {
    const {navigate} = this.props.navigation;
    navigate('ViewAlbum', {values: item});
  };

  static navigationOptions = {
    title: '',
  };

  render() {
    const {navigate} = this.props.navigation;
    return <View>{this.renderFlatList()}</View>;
  }
}

ListScreen.propTypes = {
  getAlbumDetails: PropTypes.func,
  albumData: PropTypes.array,
  albumError: PropTypes.string,
  albumStatus: PropTypes.string,
  albumLoading: PropTypes.bool,
};
