import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL} from './constants'


export default class Choose_Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tank_name: '',
            compost_date: '',
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
            compost_date:
                date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        })
    }

    setInputValue = (text) => {
        this.setState({
            tank_name: text
        })
    }

    handleCompostSubmit = () => {
        // event.preventDefault();
        let tank_name = this.state.tank_name;
        let compost_date = this.state.compost_date;
        this.createCompostProfile({ tank_name, compost_date });
    }

    createCompostProfile = async props => {
        const body = new FormData();
        body.append("tank_name", props.tank_name);
        body.append("compost_date", props.compost_date);

        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
               // console.log('body => ', body);
                const response = await fetch(
                    `${API_URL}/api/compost`,
                    {
                        method: "POST",
                        body,
                        redirect: 'follow',
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': 'Bearer ' + value
                        }
                    }
                );


                const result = await response.json();
                if (result.success) {
                    const { navigate } = this.props.navigation;
                    navigate('Steps_page', {comp_id: result.data.id})
                    // this.props.history.push(`/profile/${result.message.id}`);
                    // Swal.fire('New Client Added')
                }
            }

        } catch (error) {
            //console.log("kk 22" + error);
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.chooseName}> Name your Tank</Text>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <TextInput
                    keyboardType={"default"}
                    style={styles.inputStyle}
                    onChangeText={text => this.setInputValue(text)}
                    value={this.state.tank_name}
                />
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>

                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity

                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={() => {
                            //console.log("hey I am Here =====>", this.props.tanks );
                            this.props.setTanks([...this.props.tanks, { name: this.state.tank_name }])
                            // navigate('Tanks')
                            this.handleCompostSubmit()
                        }
                        }
                    >
                        <View style={{ alignItems: 'center' }}>
                            
                        </View>
                        <Text style={styles.submit_style}> SUBMIT </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 180,
    },
    chooseName: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        // width: 250,
        textAlign: 'center',
        fontSize: 18,
    },
    SubmitButtonStyle: {
        marginTop: 10,
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