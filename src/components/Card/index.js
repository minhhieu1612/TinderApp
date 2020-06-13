import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/styles';
import {Icon} from 'react-native-elements';
import getValue from '../../helpers/getValue';

const Card = ({card}) => {
  const [active, setActive] = useState(0);
  const name = getValue(card, 'name'),
    location = getValue(card, 'location'),
    picture = getValue(card, 'picture'),
    phone = getValue(card, 'phone'),
    registered = getValue(card, 'registered'),
    gender = getValue(card, 'gender');
  const fullName = name ? `${name.title} ${name.last} ${name.first}` : name;
  const address = location ? location.street : '';
  const arrDetail = [
    {
      key: 1,
      title: 'My name is',
      content: fullName,
      icon: {name: 'face'},
    },
    {
      key: 2,
      title: 'My gender is',
      content: `${gender}`,
      icon: {name: 'event-note'},
    },
    {
      key: 3,
      title: 'My address is',
      content: address,
      icon: {name: 'location-on'},
    },
    {
      key: 4,
      title: 'My phone number is',
      content: `${phone}`,
      icon: {name: 'phone'},
    },
    {
      key: 5,
      title: 'My registered key is',
      content: `${registered}`,
      icon: {name: 'lock'},
    },
  ];
  const imgSource = picture
    ? {uri: picture.replace(/^http:\/\//i, 'https://')}
    : require('./placeholder.jpg');
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader} />
      <View style={styles.wrapImage}>
        <Image source={imgSource} style={styles.cardImage} />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.bottomContainerMeta}>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>{arrDetail[active].title}</Text>
            <Text style={styles.detailContent}>
              {arrDetail[active].content}
            </Text>
          </View>
        </View>
        <View style={styles.listIcon}>
          <View style={styles.elementTop(active)} />
          {arrDetail.map(({icon, key}, index) => (
            <Icon
              key={key}
              type="material"
              name={icon.name}
              color={active === index ? COLORS.PRIMARY : COLORS.DARK(2)}
              onPress={() => {
                setActive(index);
              }}
              size={35}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 0.8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
    alignItems: 'center',
    zIndex: 0,
  },
  cardHeader: {
    flex: 0.35,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'rgba(0,0,0,.15)',
    width: 'auto',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.3)',
  },
  wrapImage: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 100,
    top: 40,
    flex: 0.3,
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.3)',
  },
  cardImage: {
    flex: 1,
    backgroundColor: COLORS.DARK(4),
    width: 158,
    height: 158,
    alignSelf: 'stretch',
    borderRadius: 100,
    resizeMode: 'cover',
  },
  cardBody: {
    flex: 0.65,
    width: 'auto',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    padding: 20,
    alignItems: 'center',
  },
  bottomContainerMeta: {
    flex: 0.6,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  detail: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  detailTitle: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '500',
  },
  detailContent: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  listIcon: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  elementTop: (index) => ({
    position: 'absolute',
    top: 15,
    left: 56 * index,
    width: 55,
    height: 7,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.PRIMARY,
  }),
});

export default Card;
