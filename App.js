import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import { Provider } from 'react-redux';
const Stack=createStackNavigator()
const Mystack=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
    <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
