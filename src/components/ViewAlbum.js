import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../styles/ListScreenStyles';

export default class ViewAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
    };
  }

  static navigationOptions = {
    title: '',
  };

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={{}}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          contentStyle={styles.scrollContent}>
          <View style={styles.titleView}>
            <Text style={styles.text} numberOfLines={5} ellipsizeMode="tail">
              {params.values.title}
            </Text>
          </View>
          <Image source={{uri: params.values.url}} style={styles.image} />
        </ScrollView>
      </View>
    );
  }
}
