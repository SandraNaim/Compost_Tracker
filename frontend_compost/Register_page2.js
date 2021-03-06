import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from './constants';
import AsyncStorage from '@react-native-community/async-storage';

console.disableYellowBox = true;

export default class Register_page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            password: '',
        }
    }

    setPhoneValue = (text) => {
        this.setState({
            phone: text
        })
        this.props.onHandleChange(text, 'phone')
    }
    setEmailValue = (text) => {
        this.setState({
            email: text
        })
        this.props.onHandleChange(text, 'email')

    }
    setPasswordValue = (text) => {
        this.setState({
            password: text
        })
        this.props.onHandleChange(text, 'password')

    }
    handleSubmit = () => {
        // event.preventDefault();
        let first_name = this.props.first_name;
        let last_name = this.props.last_name;
        let email = this.state.email;
        let phone = this.state.phone;
        let password = this.state.password;
        this.createUserProfile({ first_name, last_name, email, phone, password });
    }

    createUserProfile = async props => {
        const body = new FormData();
        body.append("first_name", props.first_name);
        body.append("last_name", props.last_name);
        body.append("email", props.email);
        body.append("password", props.password);
        body.append("phone", props.phone);
        // debugger;
        //console.log(body)

      try {

        const response = await fetch(
            `${API_URL}/api/user`,
            {
                method: "POST",
                body,
                redirect: 'follow'
            }
        );

        
        const result = await response.json();
        console.log(result.data.id)
       // if (result.success==true) {
            //const id=toString(result.data.data.id);
            //console.log("ss",result.data.id.toString())
            await AsyncStorage.setItem('id',result.data.id.toString())
            //console.log('succes: ', result)
            const { navigate } = this.props.navigation;

            navigate('Welcome_page');
          //  this.props.history.push(`/profile/${result.message.id}`);
            // Swal.fire('New Client Added')
        //}
      } catch(error) {
        //console.log('new error',error);
      }
    }


    render() {

        // const [value, onChangeText] = React.useState('Useless Placeholder');
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#16a085', height: 50, alignItems: 'center' }}>
                        <Text
                            style={styles.page_title}
                        >Personal Information</Text>
                    </View>
                    <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                        {/* <View style={{ height: 50 }}>
                            <Text style={styles.personal_info}>Personal Information</Text>
                        </View> */}
                        <Text>{"\n"}</Text>
                        <Text
                            style={styles.textStyle}
                        >Phone</Text>
                        <TextInput
                            keyboardType={"numeric"}
                            style={styles.inputStyle}
                            onChangeText={text => this.setPhoneValue(text)}
                            value={this.state.phone}
                        />
                        <Text>{"\n"}</Text>
                        <Text
                            style={styles.textStyle}
                        >Email</Text>
                        <TextInput
                            keyboardType={"email-address"}
                            style={styles.inputStyle}
                            onChangeText={text => this.setEmailValue(text)}
                            value={this.state.email}
                        />
                        <Text>{"\n"}</Text>
                        <Text
                            style={styles.textStyle}
                        >Password</Text>
                        <TextInput
                            keyboardType={"default"}
                            secureTextEntry={true}
                            style={styles.inputStyle}
                            onChangeText={text => this.setPasswordValue(text)}
                            value={this.state.password}
                        />
                        <Text>{"\n"}</Text>
                        {/* <Icon name="rightcircleo" size={20} ></Icon> */}
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity

                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() =>
                                    this.handleSubmit()
                                    //    console.log("props",this.props.first_name)
                                }                              >
                                <Text style={styles.submit_style}> SUBMIT </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    personal_info: {
        fontSize: 30,
        marginTop: 45,
        fontFamily: "Yantramanav-Bold",
        textAlign: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        // width: 250,
        fontSize: 18,
        textAlign: 'left',
    },
    textStyle: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 5,
    },
    page_title: {
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 10,
    },
    SubmitButtonStyle: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        // marginLeft: 80,
        // marginRight: 30,
        backgroundColor: '#16a085',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 200,
        alignItems: 'center',
    },
    submit_style: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    }

})