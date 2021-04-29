import * as React from 'react';
import { Image, View } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AppHeader from './AppHeader';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen: { screen: WriteStoryScreen },
    ReadStoryScreen: { screen: ReadStoryScreen },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routname = navigation.state.routeName;
        if (routname === 'WriteStoryScreen') {
          return (
            <Image
              source={require('./write.png')}
              style={{ width: 45, height: 45 }}
            />
          );
        } else if (routname === 'ReadStoryScreen') {
          return (
            <Image
              source={require('./read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);
