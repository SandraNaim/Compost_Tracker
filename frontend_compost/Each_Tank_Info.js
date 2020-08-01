import React, { Component } from 'react';
import { Text, Modal, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from './constants';
import AsyncStorage from '@react-native-community/async-storage';

console.disableYellowBox = true;

export default class Each_Tank_Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            compost_date: '',
            tank_name: this.props.route.params.tank.tank_name,
            user_id: '',
            show: false,
            showRefill: false,
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

    refillDelete = async (comp_id) => {
        try {
            const token = await AsyncStorage.getItem('token');
            // console.log(comp_id);
            const response = await fetch(
                `${API_URL}/api/element/${comp_id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
            )
            const result = await response.json();
            if (result.success) {
                //console.log('result', result);
                // const { navigate } = this.props.navigation;
                this.props.updateTanks()

                //navigate('Each_Tank_Info');
                this.setState({
                    showRefill: false,
                })
            }
        } catch (error) {
            //console.log('errror ===> ', error)
        }
    }
    handleTankDelete = async (comp_id) => {
        try {
            const token = await AsyncStorage.getItem('token');
            //console.log(comp_id);
            const response = await fetch(
                `${API_URL}/api/compost/${comp_id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
            )
            const result = await response.json();
            if (result.success) {
                //console.log(result);
                const { navigate } = this.props.navigation;
                this.props.updateTanks()

                navigate('Tanks');
            }
        } catch (error) {
            //console.log('errror ===> ', error)
        }
    }
    handleTankNameUpdate = async (comp_id) => {

        const body = new FormData();
        body.append("compost_date", this.state.compost_date);
        body.append("tank_name", 'this.state.tank_name');
        body.append("user_id", this.state.user_id);

        var urlencoded = new URLSearchParams();
        urlencoded.append("tank_name", 'this.state.tank_name');
        //console.log('this.state.tank_name', this.state.tank_name)
        //console.log(`${API_URL}/api/compost/${comp_id}`);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(
                `${API_URL}/api/compost/${comp_id}`,
                {
                    method: "PUT",
                    body: body,
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                }
            );
            const result = await response.json();
            //console.log('result ->', result)
            this.setState({
                tank_name: this.state.tank_name,
                show: false,
            })
        }

        catch (err) {
            //console.log("here sss", err)
        }
    }
    setNameValue = (text) => {
        this.setState({
            tank_name: text
        })
    }
    cancelNameFunction = () => {
        this.setState({
            show: false,
        })
    }
    refillClose = () => {
        this.setState({
            showRefill: false,
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        const { tank, comp_id } = this.props.route.params;
        return (
            <ScrollView style={{ marginLeft: 5, marginRight: 5 }}>
                <View>
                    <Text style={styles.tankName}>{this.state.tank_name}</Text>
                    <View style={{ marginTop: 45, position: 'relative' }}>
                        <ImageBackground source={require('./images/compost3.png')}
                            style={{

                                height: 170,
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
                                navigate('History_compost', { tank, comp_id })
                            }
                        >
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        // borderWidth: 2, borderColor: 'gray',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.20,
                        shadowRadius: 1.41,

                        elevation: 4,
                        alignItems: 'center',
                        paddingTop: 20
                    }}>
                        <Icon.Button
                            name='hand-o-up'
                            backgroundColor='#16a085'
                            onPress={() =>
                                navigate('History_compost', { tank, comp_id })
                            }
                        >
                            <Text style={{ fontSize: 20, color: 'white' }}>Open your Tank</Text>
                        </Icon.Button>
                    </View>

                    <View style={styles.tempContainer}>
                        <TouchableOpacity style={styles.tempButton} onPress={() =>
                            navigate('Climate_control')
                        }>
                            <Image source={require("./images/temp_hum.jpg")} style={styles.temp_hum_image} />
                            {/* <Text>Climate Control Measurements</Text> */}

                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={styles.iconButtonStyle}>
                                <Icon.Button
                                    name="edit"
                                    backgroundColor='#27ae60'
                                    // onPress={() => {
                                    //     this.handleClientUpdate(comp_id)
                                    // }}
                                    onPress={() => { this.setState({ show: true }) }}

                                >
                                    <Text style={{ fontSize: 20, color: "white", height: 50 }}>
                                        Edit Tank Name </Text>
                                </Icon.Button>
                                <Modal
                                    visible={this.state.show}
                                    transparent={true}
                                >
                                    <View style={{ backgroundColor: '#000000aa' }}>
                                        <View style={{ backgroundColor: '#ffffff', margin: 50, padding: 30, borderRadius: 10, }}>
                                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                                Update your Tank Name
                                            </Text>
                                            <TextInput
                                                keyboardType={"default"}
                                                style={styles.inputStyle}
                                                onChangeText={text => this.setNameValue(text)}
                                                value={this.state.tank_name}
                                            />
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ width: 80 }}>
                                                    <Button

                                                        title="Save" onPress={() => this.handleTankNameUpdate(comp_id)}
                                                    >
                                                    </Button>
                                                </View>
                                                <View style={{ width: 80 }}>
                                                    <Button
                                                        title="Cancel" onPress={() => this.cancelNameFunction()}
                                                    >
                                                    </Button>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={styles.iconButtonStyle}>
                                <Icon.Button
                                    name="plus-circle"
                                    backgroundColor='#8e44ad'
                                    onPress={() =>
                                        navigate('Fill_component', { tank, comp_id })
                                    }
                                ><Text style={{ fontSize: 20, color: "white", height: 50 }}>Add Materials</Text></Icon.Button>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
                            <View style={styles.iconButtonStyle}>
                                <Icon.Button
                                    name="repeat"
                                    backgroundColor='#d35400'
                                    onPress={() => { this.setState({ showRefill: true }) }}
                                ><Text style={{ fontSize: 20, color: "white", height: 50 }}>Refill your Tank</Text>
                                </Icon.Button>
                                <Modal
                                    visible={this.state.showRefill}
                                    transparent={true}
                                >
                                    <View style={{ backgroundColor: '#000000aa' }}>
                                        <View style={{ backgroundColor: '#ffffff', margin: 50, padding: 10, borderRadius: 10, height: 500 }}>
                                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>
                                                Are you sure you want to refill your Tank
                                            </Text>
                                            <Text>{'\n'}</Text>
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./images/bin.jpg')} style={styles.binImage} />
                                                <Image source={require('./images/downArrow.png')} style={styles.bownArrowImage} />
                                                <Image source={require('./images/bin_empty.jpg')} style={styles.binEmptyImage} />
                                            </View>
                                            <Text>{'\n'}</Text>
                                            <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between' }}>
                                                <View style={{ width: 80 }}>
                                                    <Button

                                                        title="Refill" onPress={() => this.refillDelete(comp_id)}
                                                    >
                                                    </Button>
                                                </View>
                                                <View style={{ width: 80 }}>
                                                    <Button
                                                        title="Cancel" onPress={() => this.refillClose()}
                                                    >
                                                    </Button>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </Modal>
                            </View>

                            <View style={styles.iconButtonStyle}>
                                <Icon.Button
                                    name="trash-o"
                                    backgroundColor='#c0392b'
                                    // onPress={()=>{this.handleTankDelete()}} 
                                    onPress={() => {
                                        Alert.alert(
                                            'Are you sure want to delete?',
                                            'This will delete your tank and you won\'t be able to recover it back',
                                            [
                                                { text: 'Delete', onPress: () => this.handleTankDelete(comp_id), style: 'destructive' },

                                                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                            ],
                                            { cancelable: false }
                                        )
                                    }}
                                ><Text style={{ fontSize: 20, color: "white", height: 50 }}>Delete your Tank</Text></Icon.Button>
                            </View>
                        </View>
                    </View>
                </View >
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    tankName: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 40,
        fontWeight: 'bold',
        color: 'black',
        textShadowOffset: {
            width: 2,
            height: 1
          },
          textShadowColor: '#16a085',
          textShadowRadius: 1
    },
    SubmitButtonStyle: {
        // position: "absolute",
        // top: 10,
        height: 170,
        // paddingTop: 10,
        // paddingBottom: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        //borderWidth: 1,
        //borderColor: '#fff',
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
    iconButtonStyle: {
        width: 140,
    },
    inputStyle: {
        marginTop: 10,
        height: 40,
        //borderColor: 'gray',
        //backgroundColor: '#ecf0f1',
        borderWidth: 1,
        // width: 250,
        color: 'black',
        //height:100,
        fontSize: 17,
        textAlign: 'center',
        backgroundColor: 'lightgray',
        marginBottom: 20,
    },
    binImage: {
        // flex: 1,
        // resizeMode: "cover",
        height: 100,
        width: 200,
    },
    binEmptyImage: {
        // flex: 1,
        // resizeMode: "cover",
        height: 100,
        width: 200,
    },
    bownArrowImage: {
        height: 50,
        width: 60,
        marginTop: 10,
        marginBottom: 10,
    },
    tempButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        // shadowColor: '#303838',
        // shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        // shadowOpacity: 0.35,
        borderColor: '#16a085',
        borderWidth: 2,
        width: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    temp_hum_image: {
        width: 50,
        height: 50,
    },
    tempContainer: {
        alignItems: 'center',
        marginTop: 30
    }

})