import React, { Component } from 'react';
import { Text, TextInput, Dimensions, Image, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';


export default class Welcome_page extends Component {
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
        //const { width, height } = Dimensions.get('window');
        // const [value, onChangeText] = React.useState('Useless Placeholder');
        const { navigate } = this.props.navigation;

        return (
            
                <View style={styles.container}>
                    
                    <View style={{alignItems:'center'}}>
                        <Image source={require('./images/welcome3.jpg')}
                            style={styles.imageStyle}
                        />
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.welcomeTitle}>Welcome</Text>
                        <Text
                            style={styles.page_title}
                        >MyCompost
                        </Text>
                    </View>

                    <View style={{ paddingRight: 40, paddingLeft: 40, marginTop: 100 }}>
                        <View >
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() =>
                                    navigate('Tanks')
                                }                                >
                                <Text style={styles.submit_style}> Get Started </Text>
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
        //flexDirection: 'column',
        backgroundColor: '#16a085',
        height: '100%',

    },
    page_title: {
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 30,
    },
    welcomeTitle: {
        fontFamily: "DancingScript-VariableFont_wght",
        fontSize: 85,
        marginTop: 50,
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
    },
    imageStyle: {
        marginTop: 100,
        width: 220,
        height: 200,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: 'white'
    }

})