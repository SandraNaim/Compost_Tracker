import React, { Component } from 'react';
import { Text, TextInput, View, Modal, Button, StyleSheet, FlatList, Alert, ScrollView, TouchableOpacity, Image, ImageBackground, CheckBox } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import CalculateFormula, { cItem } from './formula';
import { API_URL } from './constants'

export default class Fill_component extends Component {
    constructor(props) {
        super(props);
        //check: false,
        this.state = {
            greens: 'uk',
            browns: '',
            totalCN: 22,
            showGreen: false,
            showBrown: false,
            greenData: [{ item: 'gg', portion: 22 }, { item: 'gg', portion: 22 }],
            brownData: [],
            portionGreen: '',
            portionBrown: '',
            popupSelectedCompostElement: null,
            compostElements: [],

            selectedCompostGreen: [],
            selectedCompostBrown: [],
            element_date: '',
            aryCharacteristics: [],
            selectItems: []
        }
        this.updatAaryCharacteristics();
        this.getElementsToCalculate();

    }

    updatAaryCharacteristics = () => {
        const aryCharacteristics = this.state.compostElements.map(element => {
            const item = new cItem(element.material_name, element.LbCuYd, element.percentH2O, element.percentN, element.CNRatio, element.percentLignin, element.percentCellWall, element.percentC, element.percentCAvail, element.CNAvailable, element.id);

            return item;
        })

        this.setState({
            aryCharacteristics
        })
    }

    getElementsToCalculate = () => {
        const { selectedCompostGreen, selectedCompostBrown } = this.state;

        const items = [];
        //console.log('selectedCompostGreen => ', selectedCompostGreen)
        selectedCompostGreen.map(element => {
            const element_id = element.item.value;
            let index = null;

            this.state.aryCharacteristics.map((ary_element, ary_index) => {

                //console.log('ary_element ', ary_element)
                //console.log('element_id ', element_id)
                if (ary_element.elementId == element_id) {
                    index = ary_index
                }
            })

            if (index !== null) {
                items.push({
                    item_index: index, fVolume: element.portionGreen,
                })
            }


        })

        selectedCompostBrown.map(element => {
            const element_id = element.item.value;
            let index = null;

            this.state.aryCharacteristics.map((ary_element, ary_index) => {
                if (ary_element.elementId == element_id) {
                    index = ary_index
                }
            })

            if (index !== null) {
                items.push({
                    item_index: index, fVolume: element.portionBrown,
                })
            }


        })

        this.setState({
            selectItems: items
        })
    }


    async componentDidMount() {

        var that = this;

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        that.setState({
            //Setting the value of the date time
            element_date:
                date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        })


        //console.log('working .........')

        try {
            const response = await fetch(`${API_URL}/api/compost_element`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const json = await response.json();

            if (json.success === true) {
                this.setState({
                    compostElements: json.data
                }, () => {
                    this.updatAaryCharacteristics();
                    this.getElementsToCalculate();
                }
                )
            }
        } catch (error) {
            //console.log('errror ===> ', error.message)
        }

        try {
            const { comp_id } = this.props.route.params;

            const response = await fetch(`${API_URL}/api/element/comp/${comp_id}`);
            const json = await response.json();
            if (json.success === true) {
                ('json: ', json.data[0].element.category)
                let green = [], brown = [];
                json.data.map((value, key) => {
                    value.element.category == 'green' ?
                        green.push({ portionGreen: value.portion, item: { label: value.element.material_name, value: value.element_id } })
                        : brown.push({ portionBrown: value.portion, item: { label: value.element.material_name, value: value.element_id } })
                })
                this.setState({
                    selectedCompostBrown: brown,
                    selectedCompostGreen: green
                }, () => {
                    this.updatAaryCharacteristics();
                    this.getElementsToCalculate();

                })
            }
        } catch (error) {
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

    alertTotalCN = (totalCN) => {
        if (totalCN >= 25 && totalCN <= 30) {
            Alert.alert(
                'Your result is Good'
            )
        } else if (totalCN >= 20 && totalCN <= 25) {
            Alert.alert(
                'Your result is OK'
            )
        } else if (totalCN > 30 && totalCN < 40) {
            Alert.alert(
                'Your result is OK',
                'The Total Ratio should be between 25 and 30'
            )
        } else if (totalCN < 20) {
            Alert.alert(
                'Add more Brown Material',
                'The Total Ratio should be between 25 and 30' 
            )
        } else {
            Alert.alert(
                'Add more Green Material',
                'The Total Ratio should be between 25 and 30'
            )
        }
    }

    handleSubmit = async ({ id, portion }) => {
        const { comp_id } = this.props.route.params;
        const body = new FormData();
        body.append("comp_id", comp_id);
        body.append("portion", portion);
        body.append("element_id", id);
        body.append("element_date", this.state.element_date);

        // debugger;
        //console.log(body)

        try {

            const response = await fetch(
                `${API_URL}/api/element`,
                {
                    method: "POST",
                    body,
                    redirect: 'follow'
                }
            );


            const result = await response.json();
            if (result.success) {

                // const { navigate } = this.props.navigation;
                // navigate('Welcome_page');
                // this.props.history.push(`/profile/${result.message.id}`);
                // Swal.fire('New Client Added')
            }
        } catch (error) {
            //console.log(error);
        }
    }

    saveFunctionGreen = () => {
        this.setState({ showGreen: false, selectedCompostGreen: [...this.state.selectedCompostGreen, { portionGreen: this.state.portionGreen, item: this.state.popupSelectedCompostElement }] }, () => {
            this.getElementsToCalculate();
        })
        this.handleSubmit({ portion: this.state.portionGreen, id: this.state.popupSelectedCompostElement.value })
    }
    saveFunctionBrown = () => {
        this.setState({ showBrown: false, selectedCompostBrown: [...this.state.selectedCompostBrown, { portionBrown: this.state.portionBrown, item: this.state.popupSelectedCompostElement }] }, () => {
            this.getElementsToCalculate();

        })
        this.handleSubmit({ portion: this.state.portionGreen, id: this.state.popupSelectedCompostElement.value })
    }
    render() {
        // const { xtotalCN } = this.props.route.params;
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

        const calculateObject = new CalculateFormula(this.state.aryCharacteristics, this.state.selectItems);

        // console.log('this.state.aryCharacteristics => ', this.state.aryCharacteristics);
        //console.log('this.state.selectItems => ', this.state.selectItems);

        const calculateResult = calculateObject.getTotal();

        const { comp_id } = this.props.route.params;

        // console.log('calculateResult ===> ', calculateResult)
        //console.log('items ', itemsLabelsGreen.length)
        return (
            <>
                <ScrollView>
                    <View >
                        <Text style={styles.bigTitle}>Compost Elements</Text>
                    </View>
                    <View style={{ flex: 1, marginTop: 30 }}>
                        <View style={{ marginBottom: 70, }}>
                            <Text
                                style={styles.componentTitleGreen}
                            >Green Materials {comp_id}</Text>
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
                                        onPress={() => { this.setState({ showGreen: true }) }}
                                    >
                                    </Icon.Button>
                                </View>
                            </View>
                            <Modal
                                visible={this.state.showGreen}
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
                                                keyboardType={"numeric"}
                                                style={styles.inputStylePOP}
                                                onChangeText={text => this.setportionGreenValue(text)}
                                                value={this.state.portionGreen}
                                            />
                                        </View>
                                        <Button
                                            title="Save" onPress={() => this.saveFunctionGreen()}
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
                                        onPress={() => { this.setState({ showBrown: true }) }}
                                    >
                                    </Icon.Button>
                                </View>
                            </View>
                            <Modal
                                visible={this.state.showBrown}
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
                                                keyboardType={"numeric"}
                                                style={styles.inputStylePOP}
                                                onChangeText={text => this.setportionBrownValue(text)}
                                                value={this.state.portionBrown}
                                            />
                                        </View>
                                        <Button
                                            title="Save" onPress={() => this.saveFunctionBrown()}
                                        >
                                        </Button>
                                    </View>
                                </View>
                            </Modal>
                        </View>


                        <View style={{ marginTop: 0 }}>
                            {/* <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>TOTAL</Text> */}
                            <Text
                                style={styles.componentTitleTotal}
                            >Total</Text>
                            <TextInput
                                style={styles.inputStyle}
                                defaultValue={calculateObject.xtotalCN !== undefined ? calculateResult.xtotalCN.toString() : '0'}
                                // defaultValue={this.state.totalCN.toString()}
                                editable={false}
                            />

                            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                                <TouchableOpacity onPress={() => this.alertTotalCN(calculateObject.xtotalCN !== undefined ? calculateResult.xtotalCN.toString() : 0)} style={styles.buttonAlert}>
                                    <Text style={{ fontSize: 20 }}>Validate</Text>
                                </TouchableOpacity>
                            </View>

                            {/* <Text style={styles.alertStyle}>{this.alertTotalCN(this.state.totalCN)}</Text> */}
                        </View>

                    </View>
                </ScrollView>
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
    bigTitle: {
        textAlign: "center",
        fontSize: 30,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#16a085',
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
    componentTitleTotal: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: 'Yantramanav-Bold',
        textAlign: "center",
        marginTop: 20,
        color: 'white',
        marginBottom: 10,
        backgroundColor: 'gray',
        paddingTop: 20,
        paddingBottom: 20,
        // borderStyle: 'dotted',
        // borderWidth: 5,
        // borderColor: 'red',
    },
    inputStyle: {
        marginTop: 10,
        height: 50,
        //borderColor: 'gray',
        //backgroundColor: '#ecf0f1',
        //borderWidth: 1,
        // width: 250,
        color: 'black',
        //height:100,
        fontSize: 23,
        textAlign: 'center',
        // backgroundColor: 'lightgray'
    },
    inputStylePOP: {
        marginTop: 10,
        height: 50,
        //borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderWidth: 1,
        // width: 250,
        color: 'black',
        //height:100,
        fontSize: 23,
        textAlign: 'center',
        // backgroundColor: 'lightgray'
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
        marginTop: 10,

    }

})