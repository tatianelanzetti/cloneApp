import React from 'react';
import { TouchableOpacity, View, Image, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Principal = () => {
  return(
    <View style = {{backgroundColor: '#cc092f', flex: 1}}>
        <View style = {{backgroundColor: '#cc092f', flex: 2, flexDirection: 'row',alignItems:'center',  marginStart:10}}>
            <Icon name="menu" size={30} color="white"/>
            <Text style = {{fontSize:30, color:'white', marginLeft: 20}}>Bradesco</Text>
        </View>
        <View style = {{backgroundColor: '#cc092f', flex: .8, flexDirection: 'row', justifyContent: 'space-between', marginStart:10, marginEnd:10, borderBottomWidth: 1, borderColor:'white'}}>
            <Text style = {{color:'white', fontSize:22, alignItems:'center'}}>
                <Icon name="user" size={30} color="white"/>
                Olá, Tatiane
            </Text>
            <Icon name="log-out" size={30} color="white"/>
        </View>
        <View style = {{flexDirection:'row', backgroundColor: '#cc092f', flex: 3, marginTop:25, marginBottom:10, justifyContent: 'space-around'}}>
            <View style ={{justifyContent: 'center'}}>
                <Text style = {{color:'white', fontSize:18}}>Meu saldo disponível</Text>
                <View style = {{flexDirection: 'row', alignItems:'flex-end'}}>
                <Text style = {{color:'white', fontSize:20}}>R$</Text>
                <TextInput style = {{backgroundColor:'pink', borderRadius: 5,  marginTop: 20, width: 100, height: 25, marginStart:5, marginEnd:10}}></TextInput>
                <Icon name="eye" size={24} color="white"/>
                </View>
            </View>
            <View style ={{justifyContent: 'center'}}>
                <Text  style = {{color:'white', fontSize:20, borderBottomWidth: 1, borderColor:'white', marginTop: 20, alignItems: 'center'}}>
                    Ver extrato   
                    <Icon name="chevron-right" size={24} color="white"/>
                </Text>
            </View>
        </View>
        <View style = {{backgroundColor: '#d9d9d9', flex: 8}}>
            <View style = {{flexDirection:'row', backgroundColor: '#cc092f', flex: .2, alignItems: 'center'}}>
                <TouchableOpacity style = {{flexDirection:'row', backgroundColor:'white', borderTopStartRadius: 10, borderBottomStartRadius: 10,  marginTop: 20, width: 300, height: 60, marginStart:30}}>
                    <Text style = {{color:'grey', fontSize:20, textAlign:'center', marginTop:20, marginStart:10}}>Fala com a</Text>
                    <Text style = {{color:'#cc092f', fontSize:20, textAlign: 'center', marginTop:20, marginStart:5}}>BIA</Text>
                    <Icon name="search" size={30} color='#cc092f' style ={{marginTop:15, marginStart:120}}/>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor:'#9B0825', borderTopEndRadius: 10, borderBottomEndRadius: 10,  marginTop: 20, width: 50, height: 60, alignItems:'center'}}>
                    <Icon name="mic" size={24} color="white" style ={{marginTop:15}}/>
                </TouchableOpacity>
            </View>
            <View  style = {{flexDirection:'row', alignItems: 'center', justifyContent:'center', marginTop:40}}>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15, width: 170, height: 60, alignItems:'center'}}>
                    <Text style = {{marginTop:15,}}>
                        <Icon name="repeat" size={24} color="#9B0825"/>
                        Transferências
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15, width: 170, height: 60, alignItems:'center', marginStart:10}}>
                    <Text style = {{marginTop:15}}>
                        <Icons name="barcode-scan" size={24} color="#9B0825" />Pagamentos
                    </Text>
                </TouchableOpacity>
            </View>
            <View  style = {{flexDirection:'row', alignItems: 'center', justifyContent:'center', marginTop:10}}>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15, width: 170, height: 60, alignItems:'center'}}>
                    <Text style = {{marginTop:15}}>
                        <Icon name="credit-card" size={24} color="#9B0825"/>
                        Cartões
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15, width: 170, height: 60, alignItems:'center', marginStart:10}}>
                    <Text style = {{marginTop:15}}>
                        <Icons name="grid" size={24} color="#9B0825" />Pix
                    </Text>
                </TouchableOpacity>
            </View>
            <View  style = {{flexDirection:'row', alignItems: 'center', justifyContent:'center', marginTop:10}}>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15, width: 170, height: 60, alignItems:'center'}}>
                    <Text style = {{marginTop:5, textAlign:'center'}}>
                        <Icon name="dollar-sign" size={24} color="#9B0825"/>
                        Empréstimos/ Consignado
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15, width: 170, height: 60, alignItems:'center', marginStart:10}}>
                    <Text style = {{marginTop:15}}>
                        <Icons name="trending-up" size={24} color="#9B0825" />Investimento
                    </Text>
                </TouchableOpacity>
            </View>
           
           
            <View style = {{backgroundColor: '#d9d9d9', alignContent:'center', alignItems:'center', flex:.2}}>
                <TouchableOpacity style = {{backgroundColor:'white', borderRadius: 15,  marginTop: 20, width: 350, height: 60, alignItems:'center'}}>
                    <Icon name="chevron-up" size={30} color="#cc092f"/>
                    <Text>mais serviços </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    
  )
}
export default Principal;