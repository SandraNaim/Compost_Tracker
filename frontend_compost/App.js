
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Landing_page from './Landing_page';
import Register_page from './Register_page';
import Login_page from './Login_page';
import Register_page2 from './Register_page2';
import Compost_bin from './Compost_bin';
import Fill_component from './Fill_component';
import Climate_control from './Climate_control';
import Steps_page from './Steps_page';
import Tanks from './Tanks';
import Choose_Name from './Choose_Name';
import Each_Tank_Info from './Each_Tank_Info';
import History_compost from './History_compost';
import test from './test';
import Welcome_page from './Welcome_page';

const Stack = createStackNavigator();

const App = () => {
  const [tanks, setTanks] = useState([{
    name: 'Tank name 1'
  }])

  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: ''
  })

  onHandleChange = (value, name) => {
    setProfile({
      ...profile,
      [name]: value,

    })
  }
  // const { navigate } = this.props.navigation;


  // handleSubmit = ()=> {
  //   // {console.log(this.props.firstNameValue)}
  //   const first_name = profile.first_name;
  //   const last_name = profile.last_name;
  //   // navigate('Tanks')

  // }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Fill_component"
            component={Fill_component}
            options={{
              headerShown: false
            }}
          />
        <Stack.Screen
            name="Login_page"
            component={Login_page}
            options={{
              headerShown: false
            }}
          />
        <Stack.Screen
            name="Register_page"
            options={{
              headerShown: false
            }}
          >
            {props => <Register_page {...props} onHandleChange={onHandleChange} profile={profile} />}
          </Stack.Screen>
        
        
        <Stack.Screen
            name="Tanks"
            options={{
              headerShown: false
            }}
          >
            {props => <Tanks {...props} tanks={tanks} setTanks={setTanks} />}
          </Stack.Screen>
        <Stack.Screen
            name="Choose_Name"
            options={{
              headerShown: false
            }}
          >
            {props => <Choose_Name {...props} setTanks={setTanks} tanks={tanks} />}
          </Stack.Screen>
        

          <Stack.Screen
            name="Register_page2"
            // component={Register_page2}
            options={{
              headerShown: false
            }}
          >
            {props => <Register_page2 {...props} /* handleSubmit={handleSubmit} */first_name={profile.first_name} last_name={profile.last_name} onHandleChange={onHandleChange} profile={profile}  />}
          </Stack.Screen>

          <Stack.Screen
            name="Welcome_page"
            component={Welcome_page}
            options={{
              headerShown: false
            }}
          />

          
          

          <Stack.Screen
            name="Each_Tank_Info"
            component={Each_Tank_Info}
            options={{
              headerShown: false
            }}
          >
            {/* {props => <Each_Tank_Info {...props} tanks={tanks} setTanks={setTanks} />} */}

          </Stack.Screen>
       
          <Stack.Screen
            name="Steps_page"
            component={Steps_page}
            options={{
              headerShown: false
            }}
          />


          <Stack.Screen
            name="test"
            component={test}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="History_compost"
            component={History_compost}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Compost_bin"
            component={Compost_bin}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Climate_control"
            component={Climate_control}
            options={{
              headerShown: false
            }}
          />
             
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
