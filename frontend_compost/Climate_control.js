import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

console.disableYellowBox = true;

export default class Climate_control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            temp: 37,
            hum: 60,
        }
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView >
                <Text>{'\n'}</Text>
                    <Text style={styles.tempHumTitle}>Temperature</Text>
                    <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                        <ImageBackground source={require('./images/temp.png')}
                            style={{
                                height: 180,
                                width: 70,
                                marginLeft: 30,
                            }}
                        />
                        <TextInput
                            style={styles.inputStyleTemp}
                            // onChangeText={text => this.setInputValue(text)}
                            // value={this.inputValue}
                            defaultValue={`${this.state.temp}`}
                            editable={false}
                        />
                        <Text style={styles.degreetitle}>°C</Text>
                    </View>
                        
                        <View style={{alignItems:'center',borderBottomWidth:1, paddingBottom: 40, paddingTop: 40}}>
                            <Text style={{fontSize: 20}}>
                                Temperature should be 65-70 °C
                            </Text>
                        </View>

                    <Text>{'\n'}</Text>
                    <Text style={styles.tempHumTitle}>Humidity</Text>
                    <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                        <ImageBackground source={require('./images/humidityy.jpg')}
                            style={{
                                height: 100,
                                width: 80,
                                marginLeft: 30,
                                marginTop: 40
                            }}
                        />
                        <TextInput
                            style={styles.inputStyleHum}
                            // onChangeText={text => this.setInputValue(text)}
                            // value={this.inputValue}
                            defaultValue={`${this.state.hum}`}

                            editable={false}
                        />
                        <Text style={styles.degreetitle}>%</Text>
                    </View>
                    <View style={{alignItems:'center', paddingTop: 40}}>
                            <Text style={{fontSize: 20}}>
                                Humidity should be 60 %
                            </Text>
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
        marginBottom: 100
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
        marginLeft: 20,
        color:'black',
        fontSize: 17
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
        marginLeft: 20,
        color:'black',
        fontSize: 17
    },
    degreetitle: {
        marginTop: 80,
        fontSize: 30,
    },
    tempHumTitle: {
        fontSize: 30,
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        color: '#16a085',
        marginLeft: 10,
        textAlign: 'center',
        marginBottom: 10
    },
    buttonAlertTemp: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,

    }
    
})