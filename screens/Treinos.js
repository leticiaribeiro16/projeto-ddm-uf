import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Treinos({navigation}){
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    async function getData(){
      const response = await fetch('https://api-treinos.herokuapp.com/treinos');
      const treinos = await response.json();
      setTreinos(treinos);
    }
    getData();
  }, []);

  function renderItem({item}){
    return <View>
      <Text style={styles.textHeader}>{item.nome}</Text>
      <Image style={styles.image} source={{uri: item.img}} />
      <Text style={styles.textHeaderDetails}>{item.descricao}</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList 
        data={treinos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    height: 200,
    width: 350,
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
    color: '#24FF00',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 15,
  },
  textHeaderDetails: {
    color: 'white',
    fontSize: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  }
})