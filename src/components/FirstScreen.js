import React, {Component} from 'react';
import {Button} from 'react-native';

export default class FirstScreen extends Component {
  static navigationOptions = {
    title: '',
  };
  render() {
    const {navigate} = this.props.navigation;
    return <Button title="Open" onPress={() => navigate('Album', {})} />;
  }
}
