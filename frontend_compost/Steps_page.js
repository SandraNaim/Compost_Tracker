import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert, Image, ImageBackground, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Fill_component from './Fill_component';

export default class Steps_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        /* const { navigate } = this.props.navigation; */

        return (
            <View>
                <ScrollView >
                    <View style={styles.container}>
                        <View style={{ flex: 1 }}>
                            <ProgressSteps>
                                <ProgressStep label="First Step">
                                    <View>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold' }}>Choose where you should put your compost pile</Text>
                                        <Text>{'\n'}</Text>
                                        <Text>{'\u2B24'}</Text>
                                        <Text>Shaded area will help prevent drying out in summer</Text>
                                        <Text>{'\u2B24'}</Text>
                                        <Text>Avoid areas that will interfere with lawn and garden activities </Text>
                                        <Text>{'\u2B24'}</Text>
                                        <Text>Adequate work area around the pile</Text>
                                        <Text>{'\u2B24'}</Text>
                                        <Text>Area for storage</Text>
                                        <Text>{'\u2B24'}</Text>
                                        <Text>Water available</Text>
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Second Step">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                        >
                                            Start the pile with a 4-6 inch layer of Brown (high-carbon) material.
                                        </Text>
                                        <Image source={require('./images/BrownMat.jpg')}
                                        />
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Third Step">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                        >
                                            Start the pile with a 4-6 inch layer of Brown (high-nitrogen) material.
                                        </Text>
                                        <Image source={require('./images/GreenMat.jpg')}
                                        />
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Fourth Step">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                        >
                                            Additional thin layer of soil, sawdust, leaves, straw or compost should be added to absorb odors.

                                        </Text>
                                        <Image source={require('./images/thinLayer.png')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                        >
                                            Mix the layers.

                                        </Text>
                                        <Image source={require('./images/mixLayers.png')}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                        >
                                            Add water until squeezing a handful will yield a couple of drops of water.
                                        </Text>
                                        <Image source={require('./images/addWater.png')}
                                        />
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Fifth Step">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}
                                        >
                                            Continue adding layers, mixing them as you go, until pile is 3 or 4 feet high.
                                    </Text>
                                        <Image source={require('./images/finalStep.png')}
                                        />
                                    </View>
                                </ProgressStep>
                            </ProgressSteps>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },


})