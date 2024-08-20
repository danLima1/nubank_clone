import { View, Text, FlatList, Pressable, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Operations } from "@/constants/Operations"; 
import { OperationsHomeProps } from "@/types";
import PixScreen from "../Pix/PixScreen"; // Certifique-se de ajustar o caminho conforme necessário

const OperationsContainer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }: { item: OperationsHomeProps }) => (
    <View style={{ gap: 8, alignItems: 'center', marginRight: 4 }}>
      <Pressable
        style={{ padding: 24, borderRadius: 999, backgroundColor: '#e5e5e5' }}
        onPress={handlePress}
      >
        {item.icon}
        {item.extra && (
          <Text 
            style={{
              backgroundColor: '#007bff', 
              paddingVertical: 1, 
              paddingHorizontal: 4, 
              borderRadius: 4, 
              fontSize: 12, 
              position: 'absolute', 
              bottom: -8, 
              textAlign: 'center', 
              color: '#ffffff',
            }}
          >
            {item.extra}
          </Text>
        )}
      </Pressable>
      <Text style={{ textAlign: 'center', flexWrap: 'wrap', fontWeight: '500' }}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Operations}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <PixScreen />
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OperationsContainer;
