import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import LongPressButton from './LongPressButton';

export default function Table({symbol, price, change, watchList, id, setDeleteLoading }) {

    const [buttonVisible, setButtonVisible] = useState(false);

    const handleLongPress = (id) => {
        setButtonVisible(!buttonVisible);
        console.log("Uzun basma işlemi gerçekleşti, ID:", id);
    };

    const handlePress = () => {
        setButtonVisible(false);
    };

    const formattedChange = Math.abs(parseFloat(change.replace(',', '.'))).toFixed(2);


    const changeValue = parseFloat(change.replace(',', '.'));
    // const changeStyle = changeValue > 0 ? styles.changeGreenText : styles.changeRedText;

    let changeStyle;

    if (changeValue > 0) {
        changeStyle = styles.changeGreenText;
    } else if (changeValue < 0) {
        changeStyle = styles.changeRedText;
    } else {
        changeStyle = styles.changeGrayText;
    }



    

    return (
        <>
            {watchList ? (
                <Pressable onLongPress={() => handleLongPress(id)}>
                    <View style={styles.container}>
                        <View style={styles.shareNameContainer}>
                            <Text style={[styles.symbolText, styles.commonText]}>{symbol}</Text>
                        </View>

                        <View style={styles.priceContainer}>
                            <Text style={[styles.priceText, styles.commonText]}>{price}</Text>
                        </View>

                        <View style={styles.changeContainer}>
                            <Text style={[changeStyle, styles.commonText]}>% {formattedChange}</Text>
                        </View>

                    </View>
                    {buttonVisible && (
                        <View>
                            <LongPressButton
                                setDeleteLoading={setDeleteLoading}
                                watchList={watchList}
                                setButtonVisible={setButtonVisible}
                                id={id}
                                symbol={symbol}
                                price={price}
                                change={change}
                                text={'Takip Listesinden Çıkar'}
                            />
                        </View>
                    )}
                </Pressable>
            ) : (
                <Pressable onPress={handlePress} onLongPress={() => handleLongPress(id)}>

                    <View style={styles.container}>
                        <View style={styles.shareNameContainer}>
                            <Text style={[styles.symbolText, styles.commonText]}>{symbol}</Text>
                        </View>

                        <View style={styles.priceContainer}>
                            <Text style={[styles.priceText, styles.commonText]}>{price}</Text>
                        </View>

                        <View style={styles.changeContainer}>
                            <Text style={[changeStyle, styles.commonText]}>% {formattedChange}</Text>
                        </View>

                    </View>
                    {buttonVisible && (
                        <View>
                            <LongPressButton
                                setButtonVisible={setButtonVisible}
                                id={id}
                                symbol={symbol}
                                price={price}
                                change={change}
                                text={'Takip Listesine Ekle'}
                            />
                        </View>
                    )}
                </Pressable>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 18,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
    },
    shareNameContainer: {
        width: '33%',
    },
    priceContainer: {
        width: '33%',
    },
    changeContainer: {
        width: '33%'
    },
    commonText: {
        textAlign: 'center',
        fontSize: 16,
    },
    changeGreenText: {
        color: 'green',
        fontSize: 16,
    },
    changeRedText: {
        color: 'red',
        fontSize: 1,
    },
    changeGrayText:{
        color: 'gray',
        fontSize: 1,
    }
});
