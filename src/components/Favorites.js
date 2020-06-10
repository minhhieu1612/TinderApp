import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants/styles';
import {SafeAreaView} from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
export default function Favorites(props) {
  console.log('hel', props.favorites);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.list}
        data={props.favorites}
        keyExtractor={({item, index}) => index}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <View style={styles.wrapImage}>
              <Image source={{uri: item.picture}} style={styles.imageRounded} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{item.name.title}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    // flex: 0.25,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    width: windowWidth,
    backgroundColor: 'green',
  },
  item: {
    flex: 0.25,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    height: Dimensions.get('window').height,
    borderColor: 'black',
    padding: 5,
    backgroundColor: 'red',
  },
  wrapImage: {
    flex: 0.2,
    alignSelf: 'stretch',
    // alignItems: 'center',
    padding: 5,
    // borderRadius: 100,
    borderColor: COLORS.DARK(3),
    borderWidth: 1,
  },
  imageRounded: {
    width: windowWidth / 4 - 20,
    height: windowWidth / 4 - 20,
    resizeMode: 'contain',
  },
  content: {
    flex: 0.8,
    alignItems: 'center',
    // alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    color: COLORS.DARK(8),
  },
});
