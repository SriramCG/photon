import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from '../photon/src/components/FirstScreen';
import ListScreen from '../photon/src/components/ListScreen';
import ViewAlbum from '../photon/src/components/ViewAlbum';

const PhotonNavigator = createStackNavigator({
  Home: {screen: FirstScreen},
  Album: {screen: ListScreen},
  ViewAlbum: {screen: ViewAlbum},
});

const App = createAppContainer(PhotonNavigator);

export default App;
