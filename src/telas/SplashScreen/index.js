import { View } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import splashAluraMed from '../../assets/splash-aluramed.json';

export default function SplashScreen({ navigation }){

  function animacaoFinalizada(){
        // assim que a animação terminar, vamos a tela de onBoarding 
        // ao abrir a tela principal, nao queremos que o usuario possa voltar para a SplashScreen
        // considerando que as telas ficam num array
        // vamos remover o primeiro indice que corresponde a tela de splash 
    navigation.reset({
        // retira a tela da splash screen
      index: 0,
      routes: [{ name: "Onboarding" }]
    })
  }

  return (
    <View style={styles.container}>
      <LottieView 
        source={splashAluraMed}
        loop={false}
        // para iniciar o play automatico quando iniciarmos a aplicação
        autoPlay={true}
        onAnimationFinish={animacaoFinalizada}
      />
    </View>
  )
}