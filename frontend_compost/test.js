import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greens: ['uk']
        }
    }
    render() {

        return (
            <>
                <View style={{ marginBottom: 70}}>

                    <Text
                        style={styles.componentTitle}
                    >Green Materials</Text>
                    <DropDownPicker
                        items={[
                            { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                        ]}

                        multiple={true}
                        multipleText="%d items have been selected."
                        min={0}
                        max={10}

                        defaultValue={this.state.greens}
                        containerStyle={{ height: 40 }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        onChangeItem={item => this.setState({
                            greens: item // an array of the selected items
                        })}
                    />
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dfe6ed",
        height: "auto",
        paddingBottom: 10,
    },
    componentTitle: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: 'Yantramanav-Bold',
        textAlign: "center",
        marginTop: 20,
        color: 'white',
        marginBottom: 10,
        backgroundColor: '#4c6929',
        paddingTop: 20,
        paddingBottom: 20,
    },
})