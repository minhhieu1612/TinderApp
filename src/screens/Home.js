import React from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {HomeContainer} from '../containers/Home';
export default function HomeScreen() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView>
    <HomeContainer />
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
}
