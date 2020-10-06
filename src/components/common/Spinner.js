import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={size || 'large'} color="#007aff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export {Spinner};
