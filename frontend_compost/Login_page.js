import React, { Component } from 'react';
import { Text, TextInput, View, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from './constants';

export default class Login_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            email: '',
            password: '',
        }
    }

    setEmailValue = (text) => {
        this.setState({
            email: text
        })
    }
    setPasswordValue = (text) => {
        this.setState({
            password: text
        })
    }

    onSubmitLogin = async () => {
        //event.preventDefault();
        
        const body = new FormData();
        body.append("email", this.state.email);
        body.append("password", this.state.password);

        try {
            const response = await fetch(`${API_URL}/api/login`, 
            {
                'method':'POST',
                body,
                headers: {
                    'Accept': "application/json"
                }
            });
            const json = await response.json();

            if (json.success) {
                try {
                    console.log('Working ...')

                    await AsyncStorage.setItem('token', json.token)
                    // this.props.logUserIn(json.token);
                    const { navigate } = this.props.navigation;
                    this.props.updateTanks()
                    navigate('Tanks')
                    // this.props.history.push(`/profile/${result.message.id}`);
                  } catch (e) {
                    console.log(e);
                  }
            }
        } catch (error) {
            console.log(error);
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
                        >Login</Text>
                    </View>
                    <View style={{alignItems:'center', marginTop: 30}}>
                        <Image source={require('./images/welcome3.jpg')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={{ paddingRight: 15, paddingLeft: 15, marginTop: 30}}>
                        
                        <Text
                            style={styles.textStyle}
                        >Phone / Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={text => this.setEmailValue(text)}
                            value={this.state.email}
                        />
                        <Text
                            style={styles.textStyle}
                        >Password</Text>
                        <TextInput
                            style={styles.inputStyle}
                            secureTextEntry={true}
                            onChangeText={text => this.setPasswordValue(text)}
                            value={this.password}
                        />
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity

                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() => {this.onSubmitLogin()}}
                            >
                                <Text style={styles.submit_style}> Login </Text>
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
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        // width: 250,
        textAlign: 'left',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        fontSize: 18,

    },
    textStyle: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 30,
        marginTop: 30,
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
        marginTop: 60,
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
    },
    imageStyle: {
        width: 200,
        height: 180,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: 'white'
    }

})