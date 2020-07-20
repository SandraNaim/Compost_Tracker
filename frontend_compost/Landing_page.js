import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';


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
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#27ae60', height: 50, alignItems: 'center' }}>
                        <Text
                            style={styles.page_title}
                        >Composting Tracker</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                      <Text
                        style={styles.welcomeTitle}
                      >Welcome</Text>
                    </View>
                    <View style={{ paddingRight: 15, paddingLeft: 15, marginTop: 100}}>
                        <View >
                            <Text
                                style={styles.textStyle}
                            >Login here if you are a user</Text>
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() => Alert.alert('Simple Button to login')}
                            >
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
                                onPress={() => Alert.alert('Simple Button to register')}
                            >
                                <Text style={styles.submit_style}> Register </Text>
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
    page_title: {
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 10,
    },
    welcomeTitle: {
        fontFamily: "Lobster-Regular", 
        fontSize: 45, 
        marginTop: 100,
        marginBottom: -30,
    },
    textStyle: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 18,
        marginTop: 30,
        marginBottom: 10,
        // alignItems: 'left', 
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
    }

})