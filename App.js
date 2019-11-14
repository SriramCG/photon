import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from '../photon/src/components/FirstScreen';
import ListScreen from '../photon/src/container/AlbumListContainer';
import ViewAlbum from '../photon/src/components/ViewAlbum';
import configureStore from './configStore';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createDidYouMeanMessage} from 'jest-validate/build/utils';
const PhotonNavigator = createStackNavigator({
  Home: {screen: FirstScreen},
  Album: {screen: ListScreen},
  ViewAlbum: {screen: ViewAlbum},
});

const AppContainer = createAppContainer(PhotonNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    // Text.defaultProps.allowFontScaling = false;
    // TextInput.defaultProps.allowFontScaling = false;
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <View style={{flex: 1}}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
