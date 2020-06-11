import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants/styles';
import {Icon} from 'react-native-elements';
import getValue from '../helpers/getValue';
const windowWidth = Dimensions.get('window').width;
const Favorites = ({favorites, onFetchFavorites, onDeleteFavorite}) => {
  useEffect(() => {
    onFetchFavorites();
  }, [onFetchFavorites]);

  return favorites.length ? (
    <FlatList
      contentContainerStyle={styles.list}
      data={favorites}
      keyExtractor={(item, index) => item.salt}
      renderItem={({item}) => {
        const perName = getValue(item, 'name'),
          picture = getValue(item, 'picture'),
          perLocation = getValue(item, 'location'),
          perPhone = getValue(item, 'phone');
        const fullName = perName
          ? `${perName.title} ${perName.last} ${perName.first}`
          : '';
        const address = perLocation
          ? `${perLocation.street}, ${perLocation.state}`
          : '';
        const srcImg = picture ? {uri: picture} : require('./placeholder.jpg');
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              onDeleteFavorite(item.salt);
            }}>
            <View style={styles.wrapImage}>
              <Image source={srcImg} style={styles.imageRounded} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{fullName}</Text>
              <View style={styles.wrapDetail}>
                <Icon
                  type="material"
                  name="phone"
                  size={18}
                  color={COLORS.DARK(6)}
                />
                <Text style={styles.textGray}> {perPhone}</Text>
              </View>
              <View style={styles.wrapDetail}>
                <Icon
                  type="material"
                  name="location-on"
                  size={18}
                  color={COLORS.DARK(6)}
                />
                <Text style={styles.textGray}> {address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  ) : (
    <View style={styles.noData}>
      <Text style={styles.textNoData}>
        You don't have favorite person yet!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noData: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowWidth,
  },
  textNoData: {
    fontSize: 16,
    color: COLORS.DARK(7),
  },
  list: {
    width: windowWidth,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.DARK(5),
    height: 100,
    padding: 10,
  },
  wrapImage: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderRadius: 100,
    borderColor: COLORS.DARK(5),
    borderWidth: 1,
  },
  imageRounded: {
    width: 68,
    height: 68,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  content: {
    flex: 0.8,
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  wrapDetail: {
    flex: 1,
    flexDirection: 'row',
  },
  textGray: {
    color: COLORS.DARK(6),
  },
});

export default Favorites;
