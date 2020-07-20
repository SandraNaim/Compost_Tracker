import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Climate_control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView >
                    <View style={styles.container}>
                        <View style={styles.container_top}>
                            <View style={styles.myBox}>
                                <Image source={require('./images/compostBin.jpg')}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.myBoxTitle}>Compost Bin</Text>
                            </View>
                            <View style={styles.myBox}>
                                <Image source={require('./images/stepss.jpg')}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.myBoxTitle}>Steps</Text>
                            </View>
                            <View style={styles.myBoxActive}>
                                <Image source={require('./images/climateControl.png')}
                                    style={styles.imageStyle}
                                />
                                <Text style={styles.myBoxTitle}>Climate Control</Text>
                            </View>

                        </View>
                        <View style={styles.container_top_button}>
                            <View >
                                <TouchableOpacity
                                    style={styles.SubmitButtonStyle}
                                    activeOpacity={.5}
                                    onPress={() =>
                                        navigate('Compost_bin')
                                      }                               >
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity
                                    style={styles.SubmitButtonStyle}
                                    activeOpacity={.5}
                                    onPress={() =>
                                        navigate('Steps_page')
                                      }
                                >
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.SubmitButtonStyleActive}
                                    activeOpacity={.5}
                                    onPress={() =>
                                        navigate('Climate_control')
                                      }
                                >
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <Text style={styles.tempHumTitle}>Temperature</Text>
                    <View style={{display:'flex' ,flex:1, flexDirection:'row'}}>
                        <ImageBackground source={require('./images/temp.png')}
                            style={{
                                height: 180,
                                width: 70,
                                marginLeft: 30,    
                            }}
                        />
                        <TextInput
                            style={styles.inputStyleTemp}
                            onChangeText={text => this.setInputValue(text)}
                            value={this.inputValue}
                            editable={false}
                        />
                        <Text style={styles.degreetitle}>°C</Text>
                    </View>
                        <Text>{'\n'}</Text>
                    <Text style={styles.tempHumTitle}>Humidity</Text>
                    <View style={{display:'flex' ,flex:1, flexDirection:'row'}}>
                        <ImageBackground source={require('./images/climateControl.png')}
                            style={{
                                height: 170,
                                width: 80,
                                marginLeft: 30,
                               
                            }}
                        />
                        <TextInput
                            style={styles.inputStyleHum}
                            onChangeText={text => this.setInputValue(text)}
                            value={this.inputValue}
                            editable={false}
                        />
                        <Text style={styles.degreetitle}>%</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    container_top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        position: "relative",
    },
    container_top_button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        position: "absolute",
        left: 0,
        right: 0
    },
    SubmitButtonStyle: {
        // position: "absolute",
        // top: 10,
        height: 120,
        // paddingTop: 10,
        // paddingBottom: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 125,
        zIndex: 3,
        alignItems: 'center',
    },
    SubmitButtonStyleActive: {
        // position: "absolute",
        // top: 10,
        height: 120,
        // paddingTop: 10,
        // paddingBottom: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 125,
        zIndex: 3,
        alignItems: 'center',
        borderWidth: 2, borderColor: 'gray', height: 120
    },
    myBox: {
        backgroundColor: "#dfe6ed",
        height: 120,
        width: 125,
        alignItems: "center",
        // borderRadius: 10,
    },
    myBoxActive: {
        backgroundColor: "#d8e0e8",
        height: 120,
        width: 125,
        alignItems: "center",
        // borderRadius: 10,
    },
    myBoxTitle: {
        marginTop: 7,
        color: "black",
        fontSize: 17,
    },
    imageStyle: {
        width: 60,
        height: 65,
        marginTop: 10,
    },
    inputStyleTemp: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        //width: 250,
        textAlign: 'center',
        width: 180,
        marginTop: 80,
        marginLeft:50,
    },
    inputStyleHum: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        //width: 250,
        textAlign: 'center',
        width: 180,
        marginTop: 80,
        marginLeft:50,
    },
    degreetitle: {
        marginTop: 75,
        fontSize:40,
    },
    tempHumTitle: {
        fontSize:30,
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        color: '#16a085',
        marginLeft: 10,
        textAlign: 'center',
        marginBottom:10
    }
})