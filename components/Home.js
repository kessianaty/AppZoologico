import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity, ImageBackground } from 'react-native';

export default function Home() {
   
  return (

    <SafeAreaView style={styles.container}> 
    <ImageBackground style={styles.image} source={require('../assets/fundo.png')}>
      <Text style={styles.paragraph}>Zoologico Estelar</Text>
     <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/zooo.png')}
          />
          </View>           
</View>
    </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  paragraph: {
    color: '#4169E1',
    margin: 50,
    fontSize: 38,
    textAlign: 'center'
  },
  img: {
    width:300,
    height:300,
    borderRadius:60,
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
    margin:20,
    padding:30,
    borderColor:'#C1CDCD'
  },
  image: {
    padding: 8,
    flex:1,
    justifyContent:'center',
    position:'relative',
  },
});

