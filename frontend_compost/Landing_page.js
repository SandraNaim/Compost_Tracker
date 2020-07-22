import React, { Component } from 'react';
import { Text, Image, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';


export default class Landing_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    setInputValue = (text) => {
        this.setState({
            inputValue: text
        })
    }
    render() {
        // const [value, onChangeText] = React.useState('Useless Placeholder');
        const { navigate } = this.props.navigation;

        return (
            
                <View style={styles.container}>
                    
                    <View >
                        <Text style={styles.mycompostStyle}>
                        MyCompost
                        </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('./images/welcome3.jpg')}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={{alignItems: "center"}}>
                      <Text
                        style={styles.welcomeTitle}
                      >Welcome
                      </Text>
                      {/* <Text style={styles.welcomeTitleUnder}>
                          Compost Tracker
                      </Text> */}

                    </View>
                    <View style={{ paddingRight: 15, paddingLeft: 15, marginTop: 30}}>
                        <View >
                            {/* <Text
                                style={styles.textStyle}
                            >Login here if you are a user</Text> */}
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() =>
                                    navigate('Login_page')
                                }                              >
                                <Text style={styles.submit_style}> Login </Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Text
                                style={styles.textStyle}
                            >Create new account here if you are not a user</Text>
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() =>
                                    navigate('Register_page')
                                }                              >
                                <Text style={styles.submit_style}> Register </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        backgroundColor: '#16a085',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    mycompostStyle: {
        fontFamily: 'DancingScript-VariableFont_wght',
        textAlign: 'center',
        fontSize: 70,
        margin: 30,
    },
    page_title: {
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 10,
    },
    welcomeTitle: {
        fontFamily: "Lobster-Regular", 
        fontSize: 35, 
        marginTop: 30,
        // marginBottom: -30,
    },
    textStyle: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 18,
        marginTop: 30,
        marginBottom: 10,
        // alignItems: 'left', 
    },
    welcomeTitleUnder:{
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        fontSize: 15
    },
    
    SubmitButtonStyle: {
        // marginTop: 60,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        // marginLeft: 80,
        // marginRight: 30,
        backgroundColor: '#16a085',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        // width: 200,
      
    },
    submit_style: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    imageStyle: {
       
        width: 220,
        height: 200,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: 'white'
    }

})