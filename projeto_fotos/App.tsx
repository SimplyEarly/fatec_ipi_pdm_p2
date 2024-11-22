import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');
const altura_img = 200;

const App = () => {
  const [images, setImages] = useState([]);

  const pegarImagemGato = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=5',
         {
            headers: {
              'x-api-key': 'live_SdhikPwmI8pDfBMqQ4yaXMipQBl16e3nNTbC1XzPEVyCvqDFiMgOgHaBRVoKLLbW'
            },
        },
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Home.png')}
        style={styles.imagemFundo}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.subtitulo}>
          Aperte aqui para gerar 5 fotos de gatos!
        </Text>
        
        <Pressable style={styles.botao} onPress={pegarImagemGato}>
          <Text style={styles.textoBotao}>Gerar imagens😸</Text>
        </Pressable>

        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.imageGrid}>
          {images.map((image, index) => (
            <View key={index} style={styles.polaroidContainer}>
              <Image
                source={{ uri: image['url'] }}
                style={styles.catImage}
                resizeMode="cover"
              />
              <Text style={styles.caption}>
                Gato {index + 1} 😼
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagemFundo: {
    position: 'absolute',
    width: '100%',
    height: height * 1.3,
    top: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: altura_img,
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  botao: {
    alignSelf: 'center',
    width: '50%',
    backgroundColor: 'darkorchid',
    padding: 12,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
  },
  scrollContainer: {
    marginTop: 20,
    width: '100%',
  },
  imageGrid: {
    justifyContent: 'space-around',
  },
  polaroidContainer: {
    width: 220,
    height: 225,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  catImage: {
    width: 180,
    height: 180,
    borderRadius: 5,
  },
  caption: {
    marginTop: 5,
    fontSize: 15,
    textAlign: 'center',
    color: '#333',
    
  },
});

export default App;