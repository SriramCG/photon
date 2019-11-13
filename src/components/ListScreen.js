import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {BASE_URL} from '../utils/constants';
import styles from '../styles/ListScreenStyles';

export default class ListScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      albumListData: [],
    };
  }

  componentDidMount() {
    this.getValuesForAlbum();
  }

  getValuesForAlbum = async () => {
    try {
      let response = await fetch(BASE_URL);
      let responseJson = await response.json();
      const listData = responseJson;
      this.setState({albumListData: listData});
    } catch (e) {
      console.log('Error ', e);
    }
  };

  renderSeparator = () => {
    return <View style={styles.divider} />;
  };

  renderFlatList = () => {
    if (this.state.albumListData && this.state.albumListData.length) {
      return (
        <FlatList
          bounces={false}
          data={this.state.albumListData}
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
