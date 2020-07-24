
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

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
import { API_URL } from './constants';

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tanks: [],
      profile: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
      }
    }
  }

  componentDidMount() {
    this.updateTanks()

  }


  updateTanks = async () => {

    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/compost`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/jsom'
        },
      })
      const json = await response.json();
      if (json.success) {

        this.setState({
          tanks: json.data
        })
      }
    } catch (error) {
      //console.log('Error ====> ', error.message)
    }
  }

  onHandleChange = (value, name) => {
    //console.log("function",value,name)
  /*   this.setState({
      ...this.state.profile,
      profile:{
        [name]:value
      }
    },()=>console.log(this.state.profile)) */
     this.setState({
      profile: {
        ...this.state.profile,
        [name]: value,

      }
    })
  }

  setTanks = (data) => {
    this.setState({
      tanks: data
    })
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name="Landing_page"
              component={Landing_page}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Welcome_page"
              component={Welcome_page}
              options={{
                headerShown: false
              }}
            />
          
            <Stack.Screen
              name="Login_page"
              options={{
                headerShown: false
              }}
            >
              {props => <Login_page {...props} updateTanks={this.updateTanks} />}

            </Stack.Screen>
            <Stack.Screen
              name="Tanks"
              options={{
                headerShown: false
              }}
            >
              {props => <Tanks {...props} tanks={this.state.tanks} setTanks={this.setTanks} />}
            </Stack.Screen>
            
            <Stack.Screen
              name="Fill_component"
              component={Fill_component}
              options={{
                headerShown: false
              }}
            />
            

            <Stack.Screen
              name="Choose_Name"
              options={{
                headerShown: false
              }}
            >
              {props => <Choose_Name {...props} setTanks={this.setTanks} tanks={this.state.tanks} />}
            </Stack.Screen>


            <Stack.Screen
              name="Register_page2"
              // component={Register_page2}
              options={{
                headerShown: false
              }}
            >
              {props => <Register_page2 {...props} /* handleSubmit={handleSubmit} */ first_name={this.state.profile.first_name} last_name={this.state.profile.last_name} onHandleChange={this.onHandleChange} profile={this.state.profile} />}
            </Stack.Screen>

            <Stack.Screen
              name="Register_page"
              // component={Register_page}
              options={{
                headerShown: false
              }}
            >
              {props => <Register_page {...props} /* handleSubmit={handleSubmit} */  onHandleChange={this.onHandleChange} profile={this.state.profile} />}
            </Stack.Screen>




            <Stack.Screen
              name="Each_Tank_Info"
              // component={Each_Tank_Info}
              options={{
                headerShown: false
              }}
            >
              {props => <Each_Tank_Info {...props}   updateTanks={this.updateTanks}/>}

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
  }
}
// const App = () => {




//   // const { navigate } = this.props.navigation;


//   // handleSubmit = ()=> {
//   //   // {console.log(this.props.firstNameValue)}
//   //   const first_name = profile.first_name;
//   //   const last_name = profile.last_name;
//   //   // navigate('Tanks')

//   // }

// };

export default App;
