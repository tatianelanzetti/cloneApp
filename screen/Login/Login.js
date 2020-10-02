import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Login = () => {
  return(
    <View style = {{backgroundColor: '#cc092f', flex: 1}}>
      <View style = {{backgroundColor: '#cc092f', flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
        <Icon name="menu" size={30} color="white"/>
        <Icon name="bell" size={30} color='white'/>
      </View>
      <View  style = {{backgroundColor: '#cc092f', flex: 6}}>
        <View style = {{justifyContent: 'space-around'}}>
        <Image resizeMode = 'contain'  source={require('../../img/logo-bradesco.png')} style ={{width: '40%', marginStart: 30, marginTop: 80}}/>
        </View>
        <View style = {{justifyContent: 'center', marginStart: 20, marginTop: 80}}>
          <Text style={{color: 'white', fontSize:26, marginTop:90}}>
            Olá.
          </Text>
          <Text style = {{ fontFamily: 'meio sans-serif', color: 'white', fontSize:26, marginTop:30}}>
            Cadastre sua conta e acesse todos os nossos serviços.
          </Text>
        </View>
        <View style = {{ alignItems:'center', justifyContent: 'center', marginTop:20 }}>
          <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 50,  marginTop: 20, width: 350, height: 60}}>
          <Text style = {{ textAlign: 'center', color:'#cc092f', fontFamily: 'meio sans-serif', fontSize:22, marginTop:15}}>cadastrar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{backgroundColor: '#cc092f', flex: 2.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginStart: 20, marginEnd: 20}}>
        <TouchableOpacity style = {{backgroundColor:'#cc092f', borderRadius: 10,  marginTop: 20, width: 100, height: 100}}>
        <Icon name="lock" size={30} color='white' style = {{alignSelf:'center', marginTop:10}}/>
        <Text style = {{ textAlign: 'center', color:'white', fontSize:18, marginTop:10}}>Chave de Segurança</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{backgroundColor:'#cc092f', borderRadius: 10, borderWidth: 1, borderColor:'white', marginTop: 20, width: 100, height: 100}}>
        <Icon name="message-square" size={30} color='white' style = {{alignSelf:'center', marginTop:10}}/>
        <Text style = {{ textAlign: 'center', color:'white', fontSize:18, marginTop:10}}>BIA</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{backgroundColor:'#cc092f', borderRadius: 10,  marginTop: 20, width: 100, height: 100}}>
        <Icon name="phone" size={30} color='white' style = {{alignSelf:'center', marginTop:10}}/>
        <Text style = {{ textAlign: 'center', color:'white', fontSize:18, marginTop:10}}>SAC Ouvidoria</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
export default Login;