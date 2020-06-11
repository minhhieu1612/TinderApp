import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, View, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Icon, Button as ButtonUI} from 'react-native-elements';
import {COLORS} from '../constants/styles';
import Card from './Card';

const windowWidth = Dimensions.get('window').width;
const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Home = ({onFetchUsers, usersData, onAddFavorite, loading}) => {
  // get data from api first
  useEffect(() => {
    onFetchUsers();
  }, [onFetchUsers]);

  const [index, setIndex] = useState(0);
  const onSwipedLeft = () => {
    if (index < usersData.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      onFetchUsers();
      setTimeout(() => {
        setIndex(0);
        swiperRef.current.setCardIndex(0);
      }, 0);
    }
  };

  const onSwipedRight = () => {
    if (usersData && typeof usersData[index] === 'object') {
      onAddFavorite(usersData[index]);
    }
    onSwipedLeft();
  };
  return (
    <View style={styles.container}>
      <View style={styles.darkOverlay} />
      <Swiper
        ref={swiperRef}
        cards={usersData}
        cardIndex={index}
        renderCard={(card) => {
          return loading || !card ? (
            <View style={styles.wrapIndicator}>
              <ActivityIndicator
                size="large"
                color={COLORS.PRIMARY}
                style={styles.loadingIndicator}
              />
            </View>
          ) : (
            <Card card={card} transitionRef={transitionRef} />
          );
        }}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        backgroundColor="rgba(0,0,0,0.05)"
        verticalSwipe={false}
        animateOverlayLabelsOpacity
        animateCardOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: 'rgba(0,0,0,.6)',
                color: 'white',
                fontSize: 24,
                borderWidth: 3,
                borderColor: 'white',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 10,
                marginLeft: -10,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: COLORS.PRIMARY,
                color: 'white',
                fontSize: 24,
                borderWidth: 3,
                borderColor: 'white',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 10,
                marginLeft: 10,
              },
            },
          },
        }}
      />
      <View style={styles.bottomContainer}>
        <ButtonUI
          icon={
            <Icon
              type="material"
              name="highlight-off"
              size={30}
              color="white"
            />
          }
          raised
          buttonStyle={[styles.btnNope, styles.btn]}
          titleStyle={styles.titleStatus}
          color={COLORS.DARK(6)}
          title="Nope"
          onPress={() => swiperRef.current.swipeLeft()}
        />
        <ButtonUI
          icon={
            <Icon
              type="material"
              name="favorite-border"
              size={30}
              color="white"
            />
          }
          raised
          buttonStyle={[styles.btnLike, styles.btn]}
          titleStyle={styles.titleStatus}
          color={COLORS.DARK(6)}
          title="Like"
          onPress={() => swiperRef.current.swipeRight()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  darkOverlay: {
    flex: 0.23,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  bottomContainer: {
    flex: 0.73,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  wrapIndicator: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
  loadingIndicator: {
    flex: 1,
  },
  btn: {
    width: windowWidth / 2 - 40,
  },
  btnNope: {
    backgroundColor: COLORS.DARK(6),
  },
  btnLike: {
    backgroundColor: COLORS.PRIMARY,
  },
  titleStatus: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export default Home;
