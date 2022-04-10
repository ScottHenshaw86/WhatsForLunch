import { Image, Modal, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { borderRadius_screen, colors } from '../../theme';

const WFLModal = ({ modalVisible, setModalVisible, uri} : any) => {

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <Pressable style={styles.centeredView} onPress={closeModal}>
      <View style={styles.modalView}>
        <Image source={{uri: uri}} style={styles.img}/>
      </View>
    </Pressable>
  </Modal>
  )
}

export default WFLModal

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.modalFilter
    },
    modalView: {
      borderRadius: borderRadius_screen,
      height: '70%',
      width: '100%',
      alignItems: "center",
    },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
    }
  });