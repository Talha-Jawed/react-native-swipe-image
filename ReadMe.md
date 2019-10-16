# React Native Swipe Image

A React Native library to swipe image on top, bottom, left, right like your favorite platforms!

## Installation

```bash
npm install react-native-swipe-image
```
OR

```bash
yarn add react-native-swipe-image
```

![](https://media.giphy.com/media/JTIYENN2XFepCE0g9n/giphy.gif)


## Props


| Props | Type | Default |
| --- | --- | --- |
| image | Array of object | required |
| swipeBottom | function() | required |
| swipeTop | function() | required |
| imageHeight | Number | required |
| textSize | Number | max 40 |
| textBold | boolean | false |
| textUnderline | boolean | false |
| textColor | String | - |


## Usage

```javaScript
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
          imageHeight={number}
          textSize={number}
          textBold={boolean}
          textColor={String}
          textUnderline={boolean}
        />
      </View>
    );
  }
}
```
## License
MIT © [Talha](https://github.com/Talha-Jawed) |
[License](https://choosealicense.com/licenses/mit/) 
