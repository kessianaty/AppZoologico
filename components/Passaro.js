import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
export default function Passaro(){

  return(
   <View style={styles.container}>

      <Text style={styles.paragraph}>Passaros</Text>
      <ScrollView>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Harpia Brasileira
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/harpia.jpg')}
          />
          <Text style={styles.texto}>
          A harpia brasileira, ou harpia (Harpia harpyja), é a maior águia das Américas e um dos maiores predadores de rapina do mundo. Ela é encontrada nas florestas tropicais da América Central e do Sul, incluindo o Brasil. Caracteriza-se por suas enormes garras e uma envergadura de asas de até 2,5 metros. Essas aves são carnívoras e caçam macacos, preguiças e outros mamíferos nas copas das árvores. A harpia é uma espécie ameaçada devido à perda de habitat e à caça ilegal, sendo importante para a conservação da biodiversidade da floresta tropical.
          </Text>
          </View>
          
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Arara Vermelha
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/arara.jpg')}
          />
          <Text style={styles.texto}>
          A arara-vermelha, ou Ara chloropterus, é uma das espécies mais icônicas de aves tropicais encontradas na América do Sul, incluindo o Brasil. Ela é conhecida por sua plumagem vibrante de vermelho e verde, além de um grande bico curvo. Essas aves vivem em florestas tropicais e se alimentam principalmente de frutas, sementes e nozes. São animais altamente sociais, frequentemente avistados em bandos. Infelizmente, a arara-vermelha enfrenta ameaças devido à degradação do habitat e à captura para o comércio ilegal de animais de estimação, sendo uma espécie em risco de extinção.
          </Text>
          </View>
          
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Coruja Buraqueira
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/cojura.jpeg')}
          />
          <Text style={styles.texto}>
          A coruja-buraqueira, nome científico Athene cunicularia, é uma espécie de coruja que habita regiões da América do Norte, América do Sul e América Central. Ela é conhecida por escavar buracos no solo, onde cria seus ninhos, daí o nome "buraqueira". Essas corujas têm plumagem em tons de marrom e amarelo, com olhos amarelos brilhantes. São predadoras noturnas e se alimentam principalmente de roedores. Sua adaptação ao convívio com seres humanos e seu papel no controle de populações de pragas agrícolas a tornam uma espécie emblemática em áreas rurais.
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
    backgroundColor: '#63B8FF',
    padding: 8
  },
  paragraph: {
    color: '#00008B',
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
    padding:20,
    borderColor:'#fff'
  },
  texto:{
    textAlign:'center',
    paddingTop:50,
    color:'#0000CD'
  },
  nome:{
    textAlign:'center',
    fontSize:25,
    padding:20,
    color:'#000080'
  }
})
