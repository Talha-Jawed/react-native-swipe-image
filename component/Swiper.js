import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions, Text } from 'react-native';

export default class Swiper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick(e, item) {
        const { swipeBottom, swipeTop } = this.props
        if (e.nativeEvent.contentOffset.y < 0) {
            swipeBottom(item)
        } else {
            swipeTop(item)
        }
    }

    render() {
        const { images, textSize, textColor, textBold, textUnderline , imageHeight } = this.props
        const screen = Dimensions.get('screen');
        return (
            <ScrollView horizontal={true} pagingEnabled={true} >
                {images &&
                    images.map((item, index) => {
                        return (
                            <ScrollView key={index} onScrollEndDrag={(e) => this.handleClick(e, item)}>
                                <Image
                                    style={[imageHeight ? { height: imageHeight } : { height: 400 }, { width: screen.width }]}
                                    source={{ uri: item.url }}
                                />
                                <View style={styles.imageText}>
                                    <Text style={[
                                        textSize ? { fontSize: textSize } : { fontSize: 20 },
                                        textBold && { fontWeight: 'bold' },
                                        textColor && { color: textColor },
                                        textUnderline && { textDecorationLine: 'underline' }
                                    ]}>
                                        {item.name && item.name}
                                    </Text>
                                </View>
                            </ScrollView>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imageText: {
        position: 'absolute',
        bottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});
