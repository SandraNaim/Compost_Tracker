import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from './constants'


export default class History_compost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            histComp: [],
        }
    }

    checkBoxTest() {
        {
            this.setState({
                check: !this.state.check
            })
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch(`${API_URL}/api/element`);
            const json = await response.json();
            if (json.success === true) {

                this.setState({
                    histComp:this.groupData(json.data),
                });
            }
        } catch (error) {
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ flex: 1, alignItems: "stretch" }}>
                <Text
                    style={styles.componentTitle}
                >Green / Brown Components Inside the Tank</Text>
                <ScrollView style={{ flex: 0, height: "auto", backgroundColor: "#dfe6ed" }}>
                    <View style={styles.containerTank}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.dateTitle}>Date: </Text>

                        </View>
                        {this.state.histComp.map((comp, index) => {
                            return (<View key={index} style={{ flexDirection: 'row' }}>
                                <Text>{'\u2B24'}</Text>
                                <Text style={styles.componentSubTitle}>{comp.element_id}</Text>
                            </View>)
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dfe6ed",
        height: "auto",
        paddingBottom: 10,
    },
    containerTank: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 50,
    },
    componentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    dateTitle: {
        fontSize: 20,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#16a085',
    },
    componentSubTitle: {
        fontSize: 15,
    }


})