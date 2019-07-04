# React Native Swipe Image

A React Native library to swipe image on top, bottom, left, right like your favorite platforms!

#Install


> npm install react-native-swipe-image

OR

> yarn add react-native-swipe-image

![alt text](https://media.giphy.com/media/KfHsQL8zdS4dKkKUiq/giphy.gif)

##Props


| Props | Type | Default |
| --- | --- | --- |
| image | Array of object | required |
| swipeBottom | function() | required |
| swipeTop | function() | required |
| imageHeight | Number | 400 |
| textSize | Number | 20 |
| textBold | boolean | false |
| textUnderline | boolean | false |
| textColor | String | - |


##Usaga

```
import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swipe-image';

export default class App extends React.Component {
     state = {
      images : [
        { url: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name:"shakira" },
        { url: 'https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg', name: "cat" },
        { url: 'https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg', name: "baby" }
      ]
   }

  bottom(e) {
    alert('Swipe Bottom')
  }

  top(e) {
    alert('Swipe Top')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper
          images={this.state.images}
          swipeBottom={(e) => this.bottom(e)}
          swipeTop={(e) => this.top(e)}
          imageHeight={600}
          textSize={40}
          textBold={true}
          textColor={'white'}
          textUnderline={true}
        />
      </View>
    );
  }
}
```
