import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
export default function Reptil(){

  return(
   <View style={styles.container}>

      <Text style={styles.paragraph}>Répteis</Text>
      <ScrollView>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Jacare
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/jacare.jpg')}
          />
          <Text style={styles.texto}>
         O jacaré-de-papo-vermelho, cujo nome científico é Melanosuchus niger, é uma espécie de réptil encontrada na região amazônica da América do Sul. Ele é conhecido por sua coloração escura, pele áspera e, como o nome sugere, a região avermelhada de sua garganta. Esses jacarés são notáveis por seu tamanho impressionante, podendo atingir mais de 5 metros de comprimento. São excelentes predadores aquáticos e se alimentam de peixes, aves e mamíferos que habitam as áreas alagadas da Amazônia. Infelizmente, devido à degradação do habitat e à caça ilegal, o jacaré-de-papo-vermelho é uma espécie ameaçada e necessita de esforços de conservação para sua sobrevivência.
          </Text>
          </View>
          
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Iguana Marinha
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/iguana.jpg')}
          />
          <Text style={styles.texto}>
          A arara-vermelha, ou Ara chloropterus, é uma das espécies mais icônicas de aves tropicais encontradas na América do Sul, incluindo o Brasil. Ela é conhecida por sua plumagem vibrante de vermelho e verde, além de um grande bico curvo. Essas aves vivem em florestas tropicais e se alimentam principalmente de frutas, sementes e nozes. São animais altamente sociais, frequentemente avistados em bandos. Infelizmente, a arara-vermelha enfrenta ameaças devido à degradação do habitat e à captura para o comércio ilegal de animais de estimação, sendo uma espécie em risco de extinção.
          </Text>
          </View>
          
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Jiboia
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/jiboia.jpg')}
          />
          <Text style={styles.texto}>
          A jiboia, uma serpente constrictora não venenosa, é amplamente encontrada nas florestas tropicais das Américas. Conhecida por sua coloração variável, que pode incluir tons de verde, amarelo, marrom e preto, a jiboia é um predador ágil que se alimenta de mamíferos, aves e outros pequenos animais. Ela usa seu corpo musculoso para estrangular suas presas antes de engoli-las por inteiro. As jiboias são frequentemente apreciadas como animais de estimação devido ao seu temperamento dócil e comportamento relativamente tranquilo, o que as torna populares entre os entusiastas de répteis.
          </Text>
          </View>
          
</View>
</ScrollView>
</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9ACD32',
    padding: 8
  },
  paragraph: {
    color: '#006400',
    margin: 24,
    fontSize: 38,
    textAlign: 'center'
  },
  img: {
    width:200,
    height:200,
    borderRadius:25,
    paddingTop:50
  },
  cxFoto: {
    margintop:10,
    margin:5,
    alignItems:"center" 
  },
  caixa:{
   flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:90,
    margin:5,
    padding:30,
    borderColor:'#228B22'
  },
  texto:{
    textAlign:'center',
    paddingTop:50,
    color:'#228B22'
  },
  nome:{
    textAlign:'center',
    fontSize:25,
    padding:20,
    color:'#008B45'
  }
})
