import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, Text, StatusBar, Platform } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function Swiper(props) {
    const handleClick = (e, item) => {
        const { swipeBottom, swipeTop } = props
        if (e.nativeEvent.contentOffset.y < 0) {
            swipeBottom(item)
        } else {
            swipeTop(item)
        }
    }
    const { images, textSize, textColor, textBold, textUnderline, imageHeight } = props
    const height = imageHeight && imageHeight > (screenHeight - Platform.OS === 'ios' ? 0
        : StatusBar.currentHeight) ? (screenHeight - Platform.OS === 'ios' ? 0 : StatusBar.currentHeight) : imageHeight;
    return (
        <ScrollView horizontal={true} pagingEnabled={true} >
            {images &&
                images.map((item, index) => {
                    return (typeof item.url === 'string' && typeof item.name === 'string' ?
                        <ScrollView key={index} onScrollEndDrag={(e) => handleClick(e, item)}>
                            <Image
                                style={{ height: height, width: screenWidth }}
                                source={{ uri: item.url }}
                            />
                            <View style={styles.imageText}>
                                <Text style={[
                                    typeof textSize === 'number' && textSize > 0 && textSize <= 40 ? { fontSize: textSize } : { fontSize: 30 },
                                    typeof textBold === 'boolean' && textBold && { fontWeight: 'bold' },
                                    typeof textColor === 'string' && { color: textColor },
                                    typeof textUnderline === 'boolean' && textUnderline && { textDecorationLine: 'underline' }
                                ]}>
                                    {item.name && item.name}
                                </Text>
                            </View>
                        </ScrollView>
                        :
                        null
                    )
                })
            }
        </ScrollView>
    );
}

export default Swiper;

const styles = StyleSheet.create({
    imageText: {
        position: 'absolute',
        bottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});
