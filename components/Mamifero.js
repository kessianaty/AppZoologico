import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

export default function Mamifero(){

  return(
   <View style={styles.container}>

      <Text style={styles.paragraph}>Mamíferos</Text>
      <ScrollView>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Urso
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/urso.jpg')}
          />
          <Text style={styles.texto}>
          O urso pardo, também conhecido como Ursus arctos, é uma espécie de mamífero carnívoro que pode ser encontrado em diversas regiões da América do Norte, Europa e Ásia. Eles são caracterizados por seu porte grande e pelagem marrom, daí o nome "urso pardo". São animais onívoros, se alimentando de uma variedade de alimentos, incluindo peixes, frutas, vegetação e pequenos mamíferos. Esses ursos têm um importante papel nos ecossistemas em que habitam, ajudando a controlar populações de presas e disseminando sementes. No entanto, enfrentam ameaças devido à degradação do habitat e à caça ilegal.
          </Text>
          </View>
          
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Leão
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/leao.jpg')}
          />
          <Text style={styles.texto}>
          O leão, cientificamente conhecido como Panthera leo, é um dos maiores felinos do mundo e é nativo da África Subsaariana e uma pequena população remanescente na Índia. Eles são famosos por sua juba, que é mais proeminente nos machos e serve como um símbolo de força e domínio. Os leões vivem em grupos sociais chamados "coalizões" e caçam em equipe, frequentemente liderados por fêmeas. Sua dieta é predominantemente composta de presas como zebras e antílopes. No entanto, os leões enfrentam ameaças devido à perda de habitat e à caça ilegal.
          </Text>
          </View>
          
</View>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Onça Pintada
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/onca.jpg')}
          />
          <Text style={styles.texto}>
          A onça-pintada, cientificamente conhecida como Panthera onca, é o maior felino das Américas e é nativa das florestas tropicais da América do Sul e Central. Ela é conhecida por sua pelagem amarela com manchas pretas, que podem variar em forma e tamanho. A onça-pintada é um predador solitário e se alimenta de uma variedade de presas, incluindo veados, capivaras e tatus. Esses felinos desempenham um papel crucial no equilíbrio dos ecossistemas em que habitam, mas estão ameaçados devido à perda de habitat e à caça ilegal. São considerados uma espécie em risco de extinção.
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
    backgroundColor: '#8B4513',
    padding: 8
  },
  paragraph: {
    color: '#D2691E',
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
    borderColor:'#FFFACD'
  },
  texto:{
    textAlign:'center',
    paddingTop:50,
    color:'#FFFFE0'
  },
  nome:{
    textAlign:'center',
    fontSize:25,
    padding:20,
    color:'#DEB887'

  }
})
