import React, { useState, useRef } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Animated } from "react-native";

export default function App() {
  const [firstBoxHeight, setFirstBoxHeight] = useState(100);
  const [secondBoxHeight, setSecondBoxHeight] = useState(100);
  const maxHeight = 300;
  const animationDuration = 1000;

  const firstBoxAnimatedHeight = useRef(new Animated.Value(firstBoxHeight)).current;
  const secondBoxAnimatedHeight = useRef(new Animated.Value(secondBoxHeight)).current;

  const firstIncreaseHeight = () => {
    if (firstBoxHeight + 20 <= maxHeight) {
      Animated.timing(firstBoxAnimatedHeight, {
        toValue: firstBoxHeight + 20,
        duration: animationDuration,
        useNativeDriver: false,
      }).start(() => {
        setFirstBoxHeight(firstBoxHeight + 20);
      });
    }
  };

  const secondIncreaseHeight = () => {
    if (secondBoxHeight + 20 <= maxHeight) {
      Animated.timing(secondBoxAnimatedHeight, {
        toValue: secondBoxHeight + 20,
        duration: animationDuration,
        useNativeDriver: false,
      }).start(() => {
        setSecondBoxHeight(secondBoxHeight + 20);
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <TouchableOpacity
          onPress={firstIncreaseHeight}
          style={{
            height: "43.75%",
            display: "flex",
            justifyContent: "flex-end",
          }}
          activeOpacity={1}
        >
          <View style={{ width: 100, overflow: "hidden" }}>
            <Animated.View style={{ height: firstBoxAnimatedHeight }}>
              <Image
                source={{
                  uri: "https://blog.obilet.com/wp-content/uploads/2023/07/0anagorsel-1-1024x683.jpeg",
                }}
                style={{ height: "100%" }}
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={secondIncreaseHeight}
          style={{ height: "43.75%" }}
          activeOpacity={1}
        >
          <View style={{ width: 100, overflow: "hidden" }}>
            <Animated.View style={{ height: secondBoxAnimatedHeight }}>
              <Image
                source={{
                  uri: "https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg",
                }}
                style={{ height: "100%" }}
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    width: "100%",
    height: "88%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 100,
    overflow: "hidden",
  },
});
