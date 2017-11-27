import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry,
       } from 'react-native';

const instructions = Platform.select({

  
});



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







render() {
    return (
        <View style={styles.container}>
            <View style={styles.flex1}>
                
                    <Text style = {styles.button}>
                        Button1
                    </Text>
              
              
                    <Text style = {styles.button}>
                        Button2
                    </Text>
              

                
                    <Text style = {styles.button}>
                        Button3
                    </Text>
              

              
                    <Text style = {styles.button}>
                        Button4
                    </Text>
               

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