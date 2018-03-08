import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      hasil:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#44C93E'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Luas Persegi
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#E1FFDE'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button 
              onPress={()=>this.setState({
                hasil:(this.state.panjang*this.state.lebar*this.state.tinggi)
              })}

              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{margin:20, backgroundColor:'#E1FFDE'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              panjang =  {this.state.panjang} {"\n"}
              lebar =  {this.state.lebar} {"\n"}
              tinggi =  {this.state.tinggi} {"\n"}
              hasil = {this.state.hasil}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
