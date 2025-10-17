import React from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  ScrollView
} from "react-native";

//import backgroundImg from '../src/assets/background.png'; // 
import dogImg from '../src/assets/Imagem - Amora.png'; // 
import profileImg from '../src/assets/Usuário.png'; // 

export default function Detalhes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>≡</Text>
        </TouchableOpacity>
        <Image source={profileImg} style={styles.profilePic} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.dogImageContainer}>
          <Image source={dogImg} style={styles.dogImage} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>Dunga</Text>
          <Text style={styles.details}>
            • 2 anos{"\n"}
            • Macho{"\n"}
            • Porte pequeno{"\n"}
            • Calmo e educado{"\n"}
            • Se dá bem com outros cachorros{"\n"}
            • Gosta de brincar e passear{"\n"}
            • Gosta de crianças mais velhas mas se assusta com bebês
          </Text>

          <Text style={styles.location}>Rio de Janeiro (RJ)</Text>

          <View style={styles.footerButtons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Falar com responsável</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.description}>
            Dunga é encantador, conquista a todos com sua serenidade. Tem pelo macio e olhos expressivos que revelam a doçura de sua personalidade. Adora passear e tempacis relaxando ao lado de seus humanos ou em um cantinho ensolarado. Esta companheiro leal e afetuoso vai trazer uma atmosfera alegre para qualquer lar que tenha a sorte de tê-lo como parte da família!
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/pets-icon.png')} style={styles.footerIcon} />
          <Text>Pets para adoção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/messages-icon.png')} style={styles.footerIcon} />
          <Text>Mensagens</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f5f7',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  menu: {
    fontSize: 24,
    color: '#fff',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  dogImageContainer: {
    backgroundColor: '#f9c4c4',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    width: 150,
    alignSelf: 'center',
    marginBottom: 15,
  },
  dogImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 8,
  },
  details: {
    fontSize: 13,
    color: '#34495e',
    marginBottom: 10,
  },
  location: {
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 10,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  shareButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderColor: '#2980b9',
    borderWidth: 1,
  },
  shareText: {
    color: '#2980b9',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    color: '#2d3436',
    marginTop: 10,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
});
