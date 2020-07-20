import React, { Component } from 'react';
import { Text, TextInput, View, Modal, Button, StyleSheet, FlatList, Alert, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';



export default class Fill_component extends Component {
    constructor(props) {
        super(props);
        //check: false,
        this.state = {
            greens: 'uk',
            browns: '',
            totalCN: 22,
            show: false,
            greenData: [{ item: 'gg', portion: 22 }, { item: 'gg', portion: 22 }],
            brownData: [],
            portionGreen: '',
            portionBrown: '',
            popupSelectedCompostElement: null,
            compostElements: [],

            selectedCompostGreen: [],
            selectedCompostBrown: [],
        }
    }

    async componentDidMount() {

        console.log('working .........')

        try {
            const response = await fetch('http://87fcb530160f.ngrok.io/api/compost_element');
            const json = await response.json();
            console.log('json.data', json.data)

            if (json.success === true) {
                this.setState({
                    compostElements: json.data
                },
                )
            }
        } catch (error) {
            console.log('errror ===> ', error)
        }
    }

    setportionGreenValue = (text) => {
        this.setState({
            portionGreen: text
        })
    }
    setportionBrownValue = (text) => {
        this.setState({
            portionBrown: text
        })
    }

    alertTotalCN(totalCN) {
        if (totalCN >= 25 && totalCN <= 30) {
            return ('Good')
        } else if (totalCN >= 20 && totalCN <= 25) {
            return ('OK')
        } else if (totalCN > 30 && totalCN < 40) {
            return ('OK')
        } else if (totalCN < 20) {
            return ('Add more Brown Material')
        } else {
            return ('Add more Green Material')
        }
    }
    showAlert = () => {
        Alert.alert(
            'You need to...'
        )
    }

    render() {
        /*  const { navigate } = this.props.navigation; */
        let itemsLabelsGreen = [
            { label: ' jjj UK', value: 'muk' },
            { label: 'UK', value: 'uk' },
        ];
        let itemsLabelsBrown = [
            { label: ' jjj UK', value: 'muk' },
            { label: 'UK', value: 'uk' },
        ];

        if (this.state.compostElements.length > 1) {
            itemsLabelsGreen = this.state.compostElements.filter(item => item.category === 'green').map((item, index) => {
                return { label: item['material_name'] || index, value: item.id }
            })
        }
        if (this.state.compostElements.length > 1) {
            itemsLabelsBrown = this.state.compostElements.filter(item => item.category === 'brown').map((item, index) => {
                return { label: item['material_name'] || index, value: item.id }
            })
        }


        //console.log('items ', itemsLabelsGreen.length)
        return (
            <>
                <View style={{ flex: 1, marginTop: 30 }}>
                    <View style={{ marginBottom: 70, }}>
                        <Text
                            style={styles.componentTitleGreen}
                        >Green Materials</Text>
                        <View>
                            <FlatList
                                data={
                                    this.state.selectedCompostGreen
                                }
                                renderItem={({ item }) => <Text style={{ fontSize: 15, textAlign: 'center' }}> Green Material: {item.item.label} / portion: {item.portionGreen}
                                </Text>}
                            />
                            <Text>{'\n'}</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ fontSize: 20, marginRight: 20, marginLeft: 95 }}>
                                    Add Green Materials
                            </Text>
                                <Icon.Button
                                    name='plus'
                                    backgroundColor='#16a085'
                                    onPress={() => { this.setState({ show: true }) }}
                                >
                                </Icon.Button>
                            </View>
                        </View>
                        <Modal
                            visible={this.state.show}
                            transparent={true}
                        >
                            <View style={{ backgroundColor: '#000000aa' }}>
                                <View style={{ backgroundColor: '#ffffff', margin: 50, padding: 50, borderRadius: 10, }}>
                                    <View >
                                        <Text style={{ fontSize: 18 }}>
                                            Choose a green material
                                        </Text>

                                        {
                                            this.state.compostElements.length > 0 ? (
                                                <DropDownPicker

                                                    items={itemsLabelsGreen}
                                                    searchable={true}
                                                    searchablePlaceholder="Search for an item"
                                                    searchablePlaceholderTextColor="gray"

                                                    containerStyle={{ height: 40 }}
                                                    itemStyle={{
                                                        justifyContent: 'flex-start'
                                                    }}
                                                    onChangeItem={item => this.setState({
                                                        popupSelectedCompostElement: item // an array of the selected items
                                                    })}
                                                />
                                            ) : null
                                        }
                                    </View>
                                    <View style={{ marginTop: 60, marginBottom: 60 }}>
                                        <Text style={{ fontSize: 18 }}>
                                            Write the Portion
                                        </Text>


                                        <TextInput
                                            style={styles.inputStyle}
                                            onChangeText={text => this.setportionGreenValue(text)}
                                            value={this.state.portionGreen}
                                        />
                                    </View>
                                    <Button
                                        title="Save" onPress={() => { this.setState({ show: false, selectedCompostGreen: [...this.state.selectedCompostGreen, { portionGreen: this.state.portionGreen, item: this.state.popupSelectedCompostElement }] }) }}
                                    >
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                    </View>


                    <View style={{ marginBottom: 70, }}>
                        <Text
                            style={styles.componentTitleBrown}
                        >Brown Materials</Text>
                        <View>
                            <FlatList
                                data={
                                    this.state.selectedCompostBrown
                                }
                                renderItem={({ item }) => <Text style={{ fontSize: 15, textAlign: 'center' }}> Brown Material: {item.item.label} / portion: {item.portionBrown}
                                </Text>}
                            />
                            <Text>{'\n'}</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{ fontSize: 20, marginRight: 20, marginLeft: 95 }}>
                                    Add Brown Materials
                            </Text>
                                <Icon.Button
                                    name='plus'
                                    backgroundColor='#16a085'
                                    onPress={() => { this.setState({ show: true }) }}
                                >
                                </Icon.Button>
                            </View>
                        </View>
                        <Modal
                            visible={this.state.show}
                            transparent={true}
                        >
                            <View style={{ backgroundColor: '#000000aa' }}>
                                <View style={{ backgroundColor: '#ffffff', margin: 50, padding: 50, borderRadius: 10, }}>
                                    <View >
                                        <Text style={{ fontSize: 18 }}>
                                            Choose a brown material
                                        </Text>

                                        {
                                            this.state.compostElements.length > 0 ? (
                                                <DropDownPicker

                                                    items={itemsLabelsBrown}
                                                    searchable={true}
                                                    searchablePlaceholder="Search for an item"
                                                    searchablePlaceholderTextColor="gray"

                                                    containerStyle={{ height: 40 }}
                                                    itemStyle={{
                                                        justifyContent: 'flex-start'
                                                    }}
                                                    onChangeItem={item => this.setState({
                                                        popupSelectedCompostElement: item // an array of the selected items
                                                    })}
                                                />
                                            ) : null
                                        }
                                    </View>
                                    <View style={{ marginTop: 60, marginBottom: 60 }}>
                                        <Text style={{ fontSize: 18 }}>
                                            Write the Portion
                                        </Text>


                                        <TextInput
                                            style={styles.inputStyle}
                                            onChangeText={text => this.setportionBrownValue(text)}
                                            value={this.state.portionBrown}
                                        />
                                    </View>
                                    <Button
                                        title="Save" onPress={() => { this.setState({ show: false, selectedCompostBrown: [...this.state.selectedCompostBrown, { portionBrown: this.state.portionBrown, item: this.state.popupSelectedCompostElement }] }) }}
                                    >
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                    </View>


                    <View style={{ marginTop: 70 }}>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>TOTAL</Text>
                        <TextInput
                            style={styles.inputStyle}
                            defaultValue={this.state.totalCN.toString()}

                            editable={false}
                        />

                        <Text>{'\n'}</Text>
                        <TouchableOpacity onPress={showAlert} style={styles.buttonAlert}>
                            <Text>Alert</Text>
                        </TouchableOpacity>

                        <Text style={styles.alertStyle}>{this.alertTotalCN(this.state.totalCN)}</Text>
                    </View>

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
    componentTitleGreen: {
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
    componentTitleBrown: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: 'Yantramanav-Bold',
        textAlign: "center",
        marginTop: 20,
        color: 'white',
        marginBottom: 10,
        backgroundColor: '#b78770',
        paddingTop: 20,
        paddingBottom: 20,
    },
    inputStyle: {
        marginTop: 10,
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        // width: 250,
        color: 'black',
        fontSize: 20
    },
    alertStyle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 25,
        fontStyle: 'italic',
        borderWidth: 1,
        borderColor: 'red',
    },
    buttonAlert: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
     }

})