import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';
import {COLORS} from '../constants/styles';
import {Icon} from 'react-native-elements';

const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type="slide-bottom"
      durationMs={ANIMATION_DURATION}
      interpolation="easeIn"
    />
    <Transition.Together>
      <Transition.In
        type="fade"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type="slide-bottom"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation="easeOut"
      />
    </Transition.Together>
  </Transition.Sequence>
);

const Card = ({card, transitionRef}) => {
  // console.log(card.picture.replace(/^http:\/\//i, 'https://'));
  const [active, setActive] = useState(0);
  const {name, location, picture, phone, registered, gender} = card;
  const arrDetail = [
    {
      key: 1,
      title: 'My name is',
      content: `${name.title} ${name.last} ${name.first}`,
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
      content: `${location.street}`,
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
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader} />
      <View style={styles.wrapImage}>
        <Image
          source={{uri: picture.replace(/^http:\/\//i, 'https://')}}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.cardBody}>
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>{arrDetail[active].title}</Text>
            <Text style={styles.detailContent}>
              {arrDetail[active].content}
            </Text>
          </View>
        </Transitioning.View>
        <View style={styles.listIcon}>
          <View style={styles.elementTop(active)} />
          {arrDetail.map(({icon, key}, index) => (
            <Icon
              key={key}
              type="material"
              name={icon.name}
              color={active === index ? COLORS.PRIMARY : COLORS.DARK(2)}
              onPress={() => {
                transitionRef.current.animateNextTransition();
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
    shadowRadius: 30,
    shadowOpacity: 0.6,
    shadowColor: '#000',
    shadowOffset: {width: 200, height: 20},
    alignItems: 'center',
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
    // marginBottom: 10,
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
