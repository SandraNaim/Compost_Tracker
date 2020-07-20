import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Each_Tank_Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        }
    }

    componentDidMount() {
        var that = this;

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        that.setState({
            //Setting the value of the date time
            date:
                date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { tank } = this.props.route.params;
        return (
            <View>
                <Text style={styles.tankName}>{tank.name}</Text>
                <View style={{ marginTop: 60, position: 'relative' }}>
                    <ImageBackground source={require('./images/bin.jpg')}
                        style={{

                            height: 200,
                            resizeMode: "contain",
                            justifyContent: "center"
                        }}
                    />
                </View>
                <View style={styles.container_top_button}>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={() =>
                            navigate('History_compost')
                        }                             >
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderWidth: 2, borderColor: 'gray',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 4,
                }}>
                    <Icon.Button
                        name='hand-o-up'
                        backgroundColor='#16a085'
                        onPress={() =>
                            navigate('History_compost')
                        }   
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Check what you have in the bin</Text>
                    </Icon.Button>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ width: 190 }}>
                            <Icon.Button
                                name="edit"
                                backgroundColor='#27ae60'
                                onPress={this.loginWithFacebook}
                            >
                                <Text style={{ fontSize: 20, color: "white", height: 40 }}>
                                    Edit Tank Name </Text></Icon.Button>
                        </View>
                        <View style={{ width: 190 }}>
                            <Icon.Button
                                name="plus-circle"
                                backgroundColor='#8e44ad'
                                onPress={this.loginWithFacebook}
                            ><Text style={{ fontSize: 20, color: "white", height: 40 }}>Add Components</Text></Icon.Button>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
                        <View style={{ width: 190 }}>
                            <Icon.Button
                                name="repeat"
                                backgroundColor='#d35400'
                                onPress={this.loginWithFacebook}
                            ><Text style={{ fontSize: 20, color: "white", height: 40 }}>Refill your Tank</Text></Icon.Button>
                        </View>
                        <View style={{ width: 190 }}>
                            <Icon.Button
                                name="trash-o"
                                backgroundColor='#c0392b'
                                onPress={this.loginWithFacebook}
                            ><Text style={{ fontSize: 20, color: "white", height: 40 }}>Delete your Tank</Text></Icon.Button>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        {this.state.date}
                    </Text>
                </View>


            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    tankName: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
    },
    SubmitButtonStyle: {
        // position: "absolute",
        // top: 10,
        height: 200,
        // paddingTop: 10,
        // paddingBottom: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 'auto',
        zIndex: 3,
        alignItems: 'center',
    },
    container_top_button: {

        height: 150,
        marginTop: 5,
        position: "absolute",
        left: 0,
        right: 0,
        top: 120,
    },

})