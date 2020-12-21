import React from 'react';
import {
    Alert,
    Modal,
    Text,
    TouchableHighlight,
    View
  } from "react-native";

class ModalSort extends React.Component {

    state = {
        modal: this.props.modal,
    }

    setModalVisible = (visible) => {
        this.setState({ modal: visible });
    }

    render() {
        const { modal } = this.state;
        return (
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
                <Text> Teste </Text>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(false)
                }}>
                    <Text> Fechar Modal </Text>
                </TouchableHighlight>
            </Modal>
          </View>
        );
    }
}

export default ModalSort;