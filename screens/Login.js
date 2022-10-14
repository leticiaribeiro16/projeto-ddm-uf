import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native'

export default function Login({navigation}){
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Treinos'}]
    })
  }
  return(
    <KeyboardAvoidingView style={styles.background}>
    {/* para nao bugar o teclado que fica em cima do teclado no IOS*/}
      <View style={styles.viewHeaderLogo}>
        <Text style={styles.headerText}>Hello Again!</Text>
        <Text style={styles.headerSmallText}>Are you ready to workout?</Text>
      </View>
      <View style={styles.containerMainApp}>
        <Text style={styles.containerTextSign}>SIGN IN</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder='E-mail'
          autoCorrect={false}
          onChangeText={() => {}}/*nao vai salvar em canto nenhum, botar funcao anonima*/
        />
        <TextInput
          style={styles.inputContainer}
          placeholder='Password'
          autoCorrect={false}
          onChangeText={() => {}}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => entrar()}>
          <Text style={styles.loginButtonText}>L O G I N</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.haventAccountButton} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.textAccount}>Don't have an account? <Text style={styles.accountGreen}>SIGN UP</Text></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewHeaderLogo}>
        <Image 
          source={require('/Users/leticia.ribeiro/app-test/assets/logo.png')}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010'
  },
  viewHeaderLogo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMainApp:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 60,
  },
  inputContainer:{
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 20,
    color: '#222',
    fontSize: 12,
    borderRadius: 5,
    padding: 20,
  },
  loginButton:{
    backgroundColor: '#24FF00',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  loginButtonText:{
    color: '#101010',
    fontSize: 15,
    fontWeight: '600',
  },
  haventAccountButton:{
    marginTop: 8,
  },
  textAccount:{
    color: '#fff'
  },
  accountGreen:{
    color: '#24FF00',
    fontWeight: '900',
  },
  headerText:{
    fontSize: 50,
    fontWeight: '800',
    color: '#24FF00',
  },
  headerSmallText:{
    color: '#fff',
    fontSize: 20,
  },
  containerTextSign:{
    color: '#24FF00',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 30,
  },

});