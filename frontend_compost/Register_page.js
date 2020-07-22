import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
        }
    }

    setFirstNameValue = (text) => {
        this.setState({
            first_name: text
        })
   this.props.onHandleChange(text, 'first_name')
    }
    setLastNameValue = (text) => {
        this.setState({
            last_name: text
        })
        this.props.onHandleChange(text, 'last_name')
    }
    render() {
        const { navigate } = this.props.navigation;
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
                        <Text>{"\n"}</Text>
                        <Text
                            style={styles.textStyle}
                        >First Name</Text>
                        <TextInput
                            keyboardType={"default"}
                            style={styles.inputStyle}
                            onChangeText={text => this.setFirstNameValue(text)}
                            value={this.state.first_name}
                        />

                        <Text>{"\n"}</Text>
                        <Text
                            style={styles.textStyle}
                        >Last Name</Text>
                        <TextInput
                            keyboardType={"default"}
                            style={styles.inputStyle}
                            onChangeText={text => this.setLastNameValue(text)}
                            value={this.state.last_name}
                        />
                        <Text>{"\n"}</Text>
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity

                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() =>
                                    navigate('Register_page2')
                                }                             >
                                <Text style={styles.submit_style}> NEXT </Text>
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
        textAlign: 'left',
        fontSize: 18,
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