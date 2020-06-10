import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FavoriteContainer} from '../containers/Favorites';
export default function FavoriteScreen({route}) {
  return (
    <View style={styles.container}>
      <FavoriteContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
