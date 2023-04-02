import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image 
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{width: '100%'}}
                resizeMode="contain"
                />
            </View>

            <Animatable.View 
                delay={600}
                animation="fadeInUp"
                style={styles.containerForm}>
                <Text style={styles.title}>Evolua em seus estudos, com o nosso app.</Text>
                <Text style={styles.text}>Realize o Login para continuar.</Text>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('SignIn')}
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#69d',
        justifyContent:'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color:'#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})