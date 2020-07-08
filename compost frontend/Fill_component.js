import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Fill_component extends Component {
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
        // const [value, onChangeText] = React.useState('Useless Placeholder');
        return (
            <View style={{flex:1,alignItems:"stretch"}}>
            <Text
                style={styles.componentTitle}
            >Green / Brown Components</Text>
            <ScrollView style={{flex:0,height:"auto"}}>
                <View style={styles.container}>

                    <View style={styles.checkboxContainer}>
                        <CheckBox size={12} value={this.state.check} style={{ size: 30 }} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}
                        >Hog Manure</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Poultry Manure (fresh)
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Vegetable Wastes
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Grass Clippings
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Poultry Manure w/liter
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Coffee Grounds
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Cow Manure
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Horse Manure
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Leaves
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Straw
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Corn Stalks
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Tree Bark
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Wood Chips
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
                        <Text style={styles.checkboxTitle}>
                            Paper
                        </Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={() => Alert.alert('Simple Button to register')}
                    >
                        <Text style={styles.submit_style}> Done </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        // flex: 0,
        // flexDirection: 'column',
        // borderWidth: 3,
        // borderColor: '#16a085',
        backgroundColor: "#dfe6ed",
       // marginTop: 30,
        height:"auto",
        // marginLeft: 50,
        // marginRight: 50,
        paddingBottom:10,
        
    },
    checkboxContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 100,
        marginTop: 25,
        marginBottom: 20,
    },
    componentTitle: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'Yantramanav-Bold',
        textAlign: "center",
        marginTop: 20,
        
        marginBottom:10,
    },
    checkboxTitle: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        marginTop: 3,
    },
    SubmitButtonStyle: {
        marginTop: 60,
        paddingTop: 10,
        paddingBottom: 10,
        //marginBottom: 100,
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
    },

})