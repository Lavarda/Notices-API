import React from 'react';
import NewsPage from '../pages/News';
import { Header }  from '../components/Header'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="NewsPage"
            screenOptions={{ gestureEnabled: false }}
        >
        <Stack.Screen
            name="NewsPage"
            component={NewsPage}
            options={{ headerTitle: props => <Header {...props} /> }}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Routes;