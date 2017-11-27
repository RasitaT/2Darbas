import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, AppRegistry, TouchableOpacity, TouchableHighlight
       } from 'react-native';

const instructions = Platform.select({

  
});

var backgroundcolors1 = ['blue', 'orange', 'purple', 'yellow'];
var backgroundcolors2 = ['blue', 'orange', 'purple', 'yellow'];
var backgroundcolors3 = ['blue', 'orange', 'purple', 'yellow'];
var backgroundcolors4 = ['blue', 'orange', 'purple', 'yellow'];



export default class antrasdarbas extends Component<{ }> {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor1: 'red', 
            backgroundColor2: 'red', 
            backgroundColor3: 'red', 
            backgroundColor4: 'red' 
          
        }
    }

    GetInitialState() {
    return {
    backgroundColor: 'red',
}
}

_changeStyle1() {

    var backgroundColor1 = backgroundcolors1[Math.floor(Math.random()*4)];
    this.setState({
        backgroundColor1: backgroundColor1
    })
}



_changeStyle2() {
    var backgroundColor2 = backgroundcolors2[Math.floor(Math.random()*4)];
    this.setState({
        backgroundColor2: backgroundColor2
    })
}
_changeStyle3() {
    var backgroundColor3 = backgroundcolors3[Math.floor(Math.random()*4)];
    this.setState({
        backgroundColor3: backgroundColor3
    })
}
_changeStyle4() {
    var backgroundColor4 = backgroundcolors4[Math.floor(Math.random()*4)];
    this.setState({
        backgroundColor4: backgroundColor4
    })
}


render() {
    return (
        <View style={styles.container}>
            <View style={styles.flex1}>
                <TouchableOpacity onPress={ () => this._changeStyle1() }>
                    <Text style = {styles.button}>
                        Button1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this._changeStyle2() }>
                    <Text style = {styles.button}>
                        Button2
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this._changeStyle3() }>
                    <Text style = {styles.button}>
                        Button3
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this._changeStyle4() }>
                    <Text style = {styles.button}>
                        Button4
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.flexBox}>
                <Text style={[styles.boxes, { backgroundColor: this.state.backgroundColor1}]}> BOX1</Text>

                <Text style={[styles.boxes, { backgroundColor: this.state.backgroundColor2}]}> BOX2</Text>

                <Text style={[styles.boxes, { backgroundColor: this.state.backgroundColor3}]}> BOX3</Text>

                <Text style={[styles.boxes, { backgroundColor: this.state.backgroundColor4}]}> BOX4</Text>

            </View>
        </View>


    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        borderWidth: 4,
        padding: 15,
        width: 150,
        marginLeft: 10,
        borderColor: 'yellow',
        backgroundColor: 'grey',
        textAlign:'center',
        fontSize: 26,
    },
    flex1: { 
        flex: 1,
        justifyContent:'space-around',
        backgroundColor: 'grey',
    },
    flexBox: {
        flex:1,
        justifyContent: 'space-around',
        backgroundColor: 'brown',
    },
    boxes: {
        padding: 30,
        width: 150,
        marginLeft: 15,
        backgroundColor: 'red',
        textAlign:'center',
        fontSize: 26,
    }
});

AppRegistry.registerComponent('antrasdarbas', () => antrasdarbas);