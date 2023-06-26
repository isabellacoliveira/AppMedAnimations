import React from "react";
import { View, Text, Image } from "react-native";
// estamos pegando estilos do arquivo original do card consulta 
import styles from "../CardConsulta/styles";
// vamos utilizar um gif para fazer isso, que ja esta disponivel na pasta assets
// ele fará o efeito de cintilar 
import shimmerGif from '../../assets/shimmer.gif';

export function CardConsultaShimmerEffect() {
  return (
    // vamos replicar essa imagem nas outras informações 
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        {/* vamos adicionar um estilo extra para essa imagem especifica */}
        <Image source={shimmerGif} style={[styles.foto,
          {
            // efeito de borda 
            overlayColor: '#FFF'
          }
        ]} />
        <View style={styles.informacoes}>
        <Image source={shimmerGif} style={{ width: 20, height: 25 }} />
          <View style={styles.consultaArea}>
             <Image source={shimmerGif} style={{ width: 100, height: 15, marginTop: 5 }} />
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Image source={shimmerGif} style={{ width: 100, height: 15 }} />
        <View style={styles.botoesArea}>
        <Image source={shimmerGif} style={{ width: '100%', height: 50, borderRadius: 10, overlayColor: '#fff' }} />
        </View>
      </View>
    </View>
  );
}