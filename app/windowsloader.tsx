import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const WindowsLoader = ({ color = "#970e97ff", size = 60 }: { color?: string; size?: number }) => {
  const numDots = 8;
  const animations = Array.from({ length: numDots }, () => useRef(new Animated.Value(0)).current);

  useEffect(() => {
    const anims = animations.map((anim, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 100),
          Animated.timing(anim, { toValue: 1, duration: 800, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0, duration: 800, useNativeDriver: true }),
        ])
      )
    );
    Animated.stagger(100, anims).start();
  }, []);

  const radius = size / 2;
  const dotRadius = size / 10;

  return (
    <View style={{ width: size, height: size, justifyContent: "center", alignItems: "center" }}>
      {animations.map((anim, i) => {
        const angle = (2 * Math.PI * i) / numDots;
        const x = radius * Math.cos(angle - Math.PI / 2);
        const y = radius * Math.sin(angle - Math.PI / 2);
        const scale = anim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1.5] });
        const opacity = anim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1] });

        return (
          <Animated.View
            key={i}
            style={{
              position: "absolute",
              width: dotRadius,
              height: dotRadius,
              borderRadius: dotRadius / 2,
              backgroundColor: color,
              top: radius + y - dotRadius / 2,
              left: radius + x - dotRadius / 2,
              transform: [{ scale }],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

export default WindowsLoader;
