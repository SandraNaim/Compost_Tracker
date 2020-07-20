import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class History_compost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
        }
    }

    checkBoxTest() {
        {
            this.setState({
                check: !this.state.check
            })
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
                            <TextInput
                                style={styles.inputStyleTemp}
                                value={this.inputValue}
                                editable={false}
                            />
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{'\u2B24'}</Text>
                                <Text style={styles.componentSubTitle}>Component 1</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{'\u2B24'}</Text>
                                <Text style={styles.componentSubTitle}>Component 2</Text>
                            </View>
                        </View>
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