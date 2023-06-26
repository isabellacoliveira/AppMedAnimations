// faz referencia a um objeto, imagem ou texto
import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Image } from 'react-native';
import styles from './styles';

export function Carrossel({ data, tempoAnimacao = 1000 }){
  const [ indice, setIndice ] = useState(0);
// manipular a posição de objetos que vamos exibir
// current para pegar o atual  
// scrollToIndex: posição do item que queremos exibir 
// verificar se ja estamos exibindo o ultimo indice do vetor 
// pois nao podemos passar um indice que ja existe
  const carrosselRef = useRef();

  function alteraPosicaoObjeto(){
    // se o indice atual for o ultimo indice, entao adicione mais um ao indice
    if(indice < data.length - 1){
      // se estiver menor que a ultima posição
      setIndice(indice + 1);
    }
    else {
       // volta a posição inicial
      setIndice(0);
    }
  }

  useEffect(() => {
    // assim conseguimos manipular o carrossel, pois o número do index que 
    // passarmos ali, será o item exibido
    carrosselRef.current.scrollToIndex({ index: indice })
    // num tempo determinado, ele vai executar a função de mudar de posição
    const intervalo = setInterval(() => {
      alteraPosicaoObjeto();
    }, tempoAnimacao)

    // executar novamente a cada 2 segundos
    return () => clearInterval(intervalo);
    // para executar o useEffect novamente
  }, [indice])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        //  posição que esta sendo exibida atualmente
        renderItem={({ item, index }) => (
          <Image
            source={item.imagem}
            style={[styles.image, 
            // se o indice for o ultimo colocamos o marginRight 
              index == data.length-1 ? { marginRight: 200 } : null
            ]}
            resizeMode="contain"
          />
        )}
        ref={carrosselRef}
      />
    </View>
  )
}