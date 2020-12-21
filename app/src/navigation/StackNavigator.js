import React from 'react';
import NewsPage from '../pages/News';
import ShowContent from '../pages/ShowContent';
import { Header }  from '../components/Header'
import { HeaderPrimary } from '../components/HeaderPrimary'

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
              options={( props ) => ({ headerTitle: <Header {...props} /> })}
              initialParams={{ sort: {}, modal: false, }}
          />
           <Stack.Screen
              name="ShowContent"
              component={ShowContent}
              options={( props ) => ({ headerTitle: <HeaderPrimary {...props} /> })}
              initialParams={{ data: {}, }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Routes;