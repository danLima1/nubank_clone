import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const PixScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => {
    // ... Implementar a lógica de fechar a tela
  };

  const handlePagar = () => {
    // ... Implementar a lógica para a funcionalidade "Pagar"
  };

  const handleTransferir = () => {
    // ... Implementar a lógica para a funcionalidade "Transferir"
  };

  const handleCobrar = () => {
    // ... Implementar a lógica para a funcionalidade "Cobrar"
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <MaterialCommunityIcons name="close" size={24} color="gray" />
      </TouchableOpacity>

      <View style={styles.content}>
       

        <Text style={styles.title}>Minha área Pix</Text>
        <Text style={styles.subtitle}>Tudo o que você precisa para pagar, transferir ou cobrar.</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handlePagar} style={styles.button}>
            <MaterialCommunityIcons name="arrange-send-to-back" size={24} color="white" />
            <Text style={styles.buttonText}>Pagar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleTransferir} style={styles.button}>
            <MaterialCommunityIcons name="cube-send" size={24} color="white" />
            <Text style={styles.buttonText}>Transferir</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCobrar} style={styles.button}>
            <MaterialCommunityIcons name="message-alert-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Cobrar</Text>
          </TouchableOpacity>
        </View>

        {showMenu && (
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="key-chain" size={24} color="black" />
              <Text style={styles.menuItemText}>Minhas chaves</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="tune-variant" size={24} color="black" />
              <Text style={styles.menuItemText}>Meu limite Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="help-circle-outline" size={24} color="black" />
              <Text style={styles.menuItemText}>Me ajuda</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  content: {
    padding: 25,
    flex: 1,
  },
  pixImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 45,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  menuItemText: {
    marginLeft: 10,
  },
});

export default PixScreen;