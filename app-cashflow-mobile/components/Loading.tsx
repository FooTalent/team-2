import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons'

export default function Loading() {
    const spinValue = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ).start();
    }, [spinValue]);
  
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  
    return (
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <AntDesign name="loading2" size={24} color="white" />
        </Animated.View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });