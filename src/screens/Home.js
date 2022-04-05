import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={style.container} >
        <Image
            source={require('../../assets/helperss.svg')}
            style={{ height: '60%', width: '90%'}}
            resizeMode="cover"
        />
        <Text style={style.text}>Helper Apps</Text>
        <Text style={{marginTop: 7, fontSize: 20, color:'#b0abab'}}>Two apps that make your life easier</Text>
        <View style={style.buttonCon}>
            <TouchableOpacity style={style.calButton} onPress={() => navigation.navigate('Calculator')}>
                <Text style={style.font}>Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.calButton} onPress={() => navigation.navigate('Todo')}>
                <Text style={style.font}>Todo</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#243441',
        // height: vh(100)
        flex: 1
    },
    text: {
        fontSize: 35,
        color: 'white',
        marginTop: 30
    },
    buttonCon: {
        display: 'flex',
        flexDirection: 'row',
        marginTop : 22
    },
    calButton : {
        backgroundColor: '#50f2f0',
        height: '33px',
        width: '95px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10
    },
    font: {
        color: '#4d4e4f',
        fontWeight: 'bold'
    }
})
