import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Table() {



    return (


        <View style={styles.container}>
            <View style={styles.shareNameContainer}>
                <Text style={styles.commonText}>Hisse Kodu</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={[styles.priceText, styles.commonText]}>Fiyat</Text>
            </View>
            <View style={styles.changeContainer}>
                <Text style={styles.commonText}>Değişim</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: '#105a37',
        color: 'white',
    },
    shareNameContainer: {
        width: '33%',
    },
    priceContainer: {
        width: '33%',
    },
    changeContainer: {
        width: '33%',
    },
    // priceText: {
    //     marginEnd: 'auto',
    //     marginStart: 'auto'
    // },
    commonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    }
})