import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from './constants';

console.disableYellowBox = true;


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
    groupFilter = (data) => {
        // arr.push(element.element_date.split(" ")[0])
        // for(let i=0;i<5;i++)
        // if(element.element_date.split(" ")[0]!=arr[i])
        // arr.push(element.element_date.split(" ")[0])
        // console.log(arr);
        const groups = data.reduce((groups, element) => {
            const date = element.element_date.split(' ')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(element);
            return groups;
        }, {});

        // Edit: to add it in the array format instead
        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                elements: groups[date]
            };
        });

        return groupArrays;
    }

    async componentDidMount() {
        try {
            const { comp_id } = this.props.route.params;

            const response = await fetch(`${API_URL}/api/element/comp/${comp_id}`);
            const json = await response.json();
            if (json.success === true) {

                this.setState({
                    histComp: this.groupFilter(json.data)
                });
            }
        } catch (error) {
            //console.log("error======>", error)
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
                    {this.state.histComp.map((comp, index) => {
                        return (
                            <View style={styles.containerTank}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.dateTitle}>Date: {comp.date} </Text>

                                </View>
                                {comp.elements.map((element, index) => {
                                    return (
                                        <View key={index} style={{ flexDirection: 'row', padding: 3 }}>
                                            <Text>{'\u2B24'}</Text>
                                            <Text style={styles.componentSubTitle}>{element.element.material_name}</Text>
                                        </View>)
                                })}
                            </View>)
                    })}
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
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'white',
        padding: 20
    },
    componentTitle: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#16a085',
        paddingBottom:10
    },
    dateTitle: {
        fontSize: 20,
        //fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#16a085',
    },
    componentSubTitle: {
        fontSize: 17,
        paddingLeft: 5
    }


})