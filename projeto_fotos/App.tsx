import React from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable, Image } from 'react-native';

const { height } = Dimensions.get('window');
const altura_img = 200;

const App = () => {
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
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>Gerar imagens😸</Text>
        </Pressable>
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
});

export default App;
