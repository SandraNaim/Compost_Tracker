import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Fill_component from './Fill_component';

console.disableYellowBox = true;

export default class Thermometer_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: 37
        }
    }


    render() {
        /* const { navigate } = this.props.navigation; */

        return (
            <View>
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
                        defaultValue={this.state.tempValue}
                        editable={false}
                    />
                    <Text style={styles.degreetitle}>°C</Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => this.alertTempValue()} style={styles.buttonAlert}>
                        <Text style={{ fontSize: 20 }}>Validate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    inputStyleTemp: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        //width: 250,
        textAlign: 'center',
        width: 180,
        marginTop: 80,
        marginLeft: 50,
    },
    buttonAlert: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,

    })

