import React from 'react';
import {FavoriteContainer} from '../containers/Favorites';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
export default function FavoriteScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FavoriteContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
