import { Pressable, Modal, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { getPortfolioNameData, postPortfolioNameData } from '../api/data';
import { BlurView } from 'expo-blur';



export default function PortfolioButton({setPostLoading}) {
    const [text, setText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const handlePost = async () => {
        const data = { title: text };
        try {
            const portfolioTitle = await getPortfolioNameData();
            const checkPortfolioTitle = portfolioTitle.some(portfolioName => portfolioName.title === text);

            if (checkPortfolioTitle) {
                Alert.alert('Uyarı', 'Bu Portfoy Adında Bir Portfoy Mevcut');
                return;
            }
            const result = await postPortfolioNameData(data);
            setModalVisible(false)
            setText('')
            setPostLoading(true)
        } catch (error) {
            console.error('Error posting data:', error);
        }
       
    };


    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <BlurView intensity={20} style={styles.absolute}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.modalInput}
                                placeholder={'Portfoy İsmi Giriniz...'}
                                onChangeText={setText}
                                value={text}
                            />
                            <View style={styles.modalButtonContainer}>
                                <Pressable
                                    onPress={handlePost}
                                    style={[styles.modalButton, styles.modalButtonSave]}>
                                    <Text style={styles.modalButtonText}>Kaydet</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, styles.modalButtonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.modalButtonText}>İptal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </BlurView>
            </Modal>


            <View style={styles.textContainer}>
                <Text style={styles.text}>Portfolyo Oluştur</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={styles.button}><AntDesign name="pluscircleo" size={100} color="#498A6F" /></Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 28,
        letterSpacing: 3,
        fontWeight: 'bold',
        opacity: 0.7
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        opacity: 0.7,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        minWidth: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    modalButtonText: {
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 18
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalInput: {
        padding: 16,
        marginBottom: 15,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-around'
    },
})

