import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

console.disableYellowBox = true;

export default class Tanks extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.bigTitle}>Your Composting Tanks </Text>

                        <View style={styles.allTanks}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{width: '100%'}}>
                                    <TouchableOpacity
                                        style={styles.SubmitButtonStyle}
                                        activeOpacity={.5}
                                        onPress={() =>
                                            navigate('Choose_Name')
                                            //this.handleCompostSubmit()
                                        }
                                    >
                                        <Text style={styles.buttonTitle}>+ Add New Tank</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={{ fontSize: 25, marginLeft: 20, marginTop: 65 }} >
                                    <Icon.Button
                                        name='hand-o-left'
                                        backgroundColor='#16a085'
                                    />
                                </View> */}
                                {/* <View>
                                    <Text style={{ fontSize: 23, marginLeft: 23, width: 200, marginTop: 50 }} >Add New Tank </Text>
                                </View> */}
                            </View>
                            <View style={{ marginTop: 40}}>
                                {
                                    this.props.tanks.map(tank => {
                                        return (
                                            <TouchableOpacity
                                                style={styles.eachTank}
                                                activeOpacity={.5}
                                                onPress={() =>
                                                    navigate('Each_Tank_Info', { tank, comp_id: tank.id })
                                                }
                                            >
                                                <Text style={styles.tankName}>{tank.tank_name || tank.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    allTanks: {
        marginTop: 50,
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    SubmitButtonStyle: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
         //marginLeft: 20,
        // marginRight: 30,
        backgroundColor: '#daf5f0',
        borderRadius: 20,
        borderColor: 'black',
        // width: 200,
        alignItems: 'center',
        borderWidth: 1,
        //borderColor: 'black',
    //     shadowColor: '#000',
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 9,

    },
    buttonTitle: {
        fontSize: 20,
        color: 'black',
        padding: 10
    },
    bigTitle: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 70,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Fondamento-Regular'
    },
    eachTank: {
        //borderColor: '#16a085',
        //borderWidth: 4,
        // width: 450,
        //height: 160,
        borderRadius: 10,
        marginTop: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        backgroundColor: '#16a085',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
    },
    tankName: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
    }

})