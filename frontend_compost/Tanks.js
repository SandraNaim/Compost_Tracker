import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Tanks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tank_name: 'Tank Name'
        }
    }



    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <ScrollView >
                    <View style={styles.container}>
                        <Text style={styles.bigTitle}>Composting Tanks</Text>

                        <View style={styles.allTanks}>
                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <TouchableOpacity
                                        style={styles.SubmitButtonStyle}
                                        activeOpacity={.5}
                                        onPress={() =>
                                             navigate('Choose_Name')
                                            //this.handleCompostSubmit()
                                        }
                                    >
                                        <Text style={styles.buttonTitle}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ fontSize: 25, marginLeft: 20, marginTop: 65 }} >
                                    <Icon.Button
                                        name='hand-o-left'
                                        backgroundColor='#16a085'
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 25, marginLeft: 20, width: 150, marginTop: 50 }} >Add New Tank Here </Text>
                                </View>
                            </View>
                            <View>
                                {
                                    this.props.tanks.map(tank => {
                                        return (
                                            <TouchableOpacity
                                                style={styles.eachTank}
                                                activeOpacity={.5}
                                                onPress={() =>
                                                    navigate('Each_Tank_Info', { tank })
                                                }
                                            >
                                                <Text style={styles.tankName}>{tank.name}</Text>
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
        marginTop: 70,
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    SubmitButtonStyle: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        // marginLeft: 80,
        // marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#fff',
        width: 150,
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#16a085',
    },
    buttonTitle: {
        fontSize: 100,
    },
    bigTitle: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 70,
        fontWeight: 'bold',
        color: '#16a085',
    },
    eachTank: {
        borderColor: '#16a085',
        borderWidth: 4,
        // width: 450,
        //height: 160,
        borderRadius: 10,
        marginTop: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white'
    },
    tankName: {
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: "bold",
    }

})