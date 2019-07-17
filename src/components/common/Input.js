import  React, { Component } from 'react';
import { View , Text , TextInput } from 'react-native';

const Input = ({ label , value , onChangeText , placeholder , secureTextEntry }) => {

    return(
        <View style={styles.containerStyle}>
            <Text style={styles.textLabelStyle}>{ label }</Text>
            <TextInput 
            secureTextEntry= { secureTextEntry }
            placeholder={ placeholder } value={value} onChangeText={onChangeText} style={styles.textInputStyle} autoCorrect={false} text/>
        </View>
    );

}

const styles={

    textInputStyle : {

        color: 'black',paddingRight: 5,
        paddingLeft: 5, fontSize: 18,
        lineHeight:23, flex: 2,

    },

    textLabelStyle:{

        fontSize:18,paddingLeft: 20,flex: 1,

    },

    containerStyle:{

        height:40,flex: 1,
        flexDirection: 'row',alignItems: 'center',
    }
}

export { Input };