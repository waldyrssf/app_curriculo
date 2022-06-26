import { StyleSheet, Image, View, Text, Alert, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";



const imagem = "https://avatars.githubusercontent.com/u/97638604?v=4";



export default function App() {

function handleRedeSocial(rede_social){
  switch(rede_social){
    case 'linkedin':
      Alert.alert("Meu LindeIn", '/www.linkedin.com/in/waldyrsoares/');
      break
    case 'github':
      Alert.alert("Meu Github", 'github.com/waldyrssf')
      break
  }
}




  return (
    <>
      <View style={styles.page}>
        <View style={styles.container}>
          <Image style={styles.imagem} source={{ uri: imagem }} />
          <Text style={styles.nome}>WALDYR SOARES</Text>
          <Text style={styles.funcao}>Estudante de TI</Text>
          <View style={styles.redessociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>

            <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>

            <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardcontainer}>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardheader}>Formação</Text>
            </View>

            <View style={styles.cardconteudo}>
              <Text style={styles.conteudotext}>
                Graduando em Sistemas para internet
              </Text>
              <Text style={styles.conteudotext}>Graduado em Administração</Text>
              
            </View>
          </View>
        </View>

        <View style={styles.cardcontainer}>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardheader}>Experiência</Text>
            </View>

            <View style={styles.cardconteudo}>
            <Text style={styles.conteudotext}>Estagiário de RH - PCR</Text>
              <Text style={styles.conteudotext}>Estagiário de Finanças - TJPE</Text>
              
            </View>
          </View>
        </View>

        <View style={styles.cardcontainer}>
          <View style={styles.card}>
            <View >
              <Text style={styles.cardheader}>Habilidades</Text>
            </View>

            <View style={styles.cardconteudo}>
              <Text style={styles.conteudotext}>HTML5, CSS3, JS, Java</Text>
              <Text style={styles.conteudotext}>Inglês, Francês</Text>
            </View>
          </View>
        </View>
      </View>


      
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E7E7E7",
  },
  imagem: {
    height: 190,
    width: 190,
    borderRadius: 100,
    borderWidth: 2,
    marginTop:20,
    borderColor: "#939393"
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },

  funcao: {
    color: "#939393",
    marginBottom: 10,
  },

  redessociais: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },

  card: {
    width: "70%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#939393",
    padding: 10,
    backgroundColor: "#FFF",
  },

  cardcontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  cardconteudo: {
    marginTop: 10,
    color: "#939393",
    
  },

  conteudotext: {
    color: "#939393",
    marginBottom: 10,
    textAlign: "center"
  },

  cardheader:{
    textAlign:"center"
  }
});
