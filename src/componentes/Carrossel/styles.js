import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    // nossa view principal
    height: 150,
    // pegar a largura maxima que nosso dispositivo permite 
    width: Dimensions.get("window").width,
    paddingLeft: 60,
  },
  image: {
    height: '100%',
    width: 150,
    marginHorizontal: 15,
  }
})