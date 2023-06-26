import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { InformacoesUsuario } from '../../componentes/InformacoesUsuario';
import Icon from 'react-native-vector-icons/MaterialIcons';
import mapa from '../../assets/mapa.png';
import styles from './styles';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withRepeat } from 'react-native-reanimated';
import { Button } from 'react-native-web';

export default function Detalhes(props) {
  const dados = props.route.params;

  // variavel que ao alterar a posição, ela mexerá com o estilo de algum elemento da tela 
  // animação do sininho
  const rotacao = useSharedValue(0);
  // o quanto vamos movimentar o sininho 
  const angulo = -30;

  const [jaAnimou, setJaAnimou] = useState(false);


  const estiloAnimado = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // isso vai fazer o carregamento suave na tela 
          // ao alterar o valor da posicao, alteramos o estilo
          // precisamos colocar em graus 
          rotate: `${rotacao.value}deg`
        }
      ]
    }
  })

  function fazerRotacao(){
    // movimentar o sininho
    // tempo da animação
    // withRepeat para fazer a repetição
    // true pois ele vai fazer uma vez e voltar, 6 pois fará 6 vezes  
    rotacao.value = withRepeat(withTiming(angulo, { duration: 120 }), 6, true)

    // depois de executar determinado tempo 
    setTimeout(() => {
      setJaAnimou(true);
    }, 1000)
  }

  return (
    <TelaDeFundo>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <InformacoesUsuario
          nome={dados.nome}
          detalhes="Cliente desde 2018"
          foto={dados.foto}
        />
          <View style={styles.detalhesMedia}>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Tempo médio de cada consulta</Text>
              <View style={[styles.circulo, { borderColor: '#FFB050' }]}>
                <Text style={styles.circuloTexto}>52 min</Text>
              </View>
            </View>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Número de consultas</Text>
              <View style={styles.circulo}>
                <Text style={styles.circuloTexto}>22</Text>
              </View>
            </View>
          </View>


          <Text style={styles.subtitulo}>Anotações sobre a paciente</Text>
          <Text style={styles.detalhes}>{dados.sobre}</Text>

          <Text style={styles.subtitulo}>Endereço</Text>
          <Image style={styles.imagemMapa} source={mapa} />
          <Text>{dados.endereco}</Text>
          <TouchableOpacity 
            style={styles.botao} 
            onPress={fazerRotacao}
          >
            <Text style={styles.botaoTexto}>Notificar consulta</Text>
            {/* a view vai alterar a rotação do icone */}
            <Animated.View 
              style={[styles.icone, estiloAnimado]}
            >
              <Icon 
              // faremos com que ele pinte o icone alternando entre as classes 'notifications' e 'notifications-none'
                name={jaAnimou ? 'notifications' : 'notifications-none'} 
                size={20} 
                color="#FFF"
              />
            </Animated.View>
          </TouchableOpacity>
      </ScrollView>
    </TelaDeFundo>
  )
}