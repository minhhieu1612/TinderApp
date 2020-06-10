import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Icon, Button as ButtonUI} from 'react-native-elements';
import {COLORS} from '../constants/styles';
import usersData from '../data/users';
import Card from '../components/Card';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const swiperRef = React.createRef();
const transitionRef = React.createRef();
const windowWidth = Dimensions.get('window').width;
export default function Home() {
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex((index + 1) % usersData.length);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <ActivityIndicator /> */}
        <View style={styles.darkOverlay} />
        <Swiper
          ref={swiperRef}
          cards={usersData.map(({user}) => user)}
          cardIndex={index}
          renderCard={(card) => (
            <Card card={card} transitionRef={transitionRef} />
          )}
          onSwiper={onSwiped}
          backgroundColor="rgba(0,0,0,0.05)"
          disableTopSwipe
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          infinite
          stackSize={2}
          stackSeparation={0}
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
            // ViewComponent={LinearGradient}
            // linearGradientProps={{
            //   COLORS: [COLORS.PRIMARY, 'white'],
            //   start: {x: 0.5, y: 0},
            //   end: {x: 1, y: 0.25},
            // }}
            buttonStyle={[styles.btnLike, styles.btn]}
            titleStyle={styles.titleStatus}
            color={COLORS.DARK(6)}
            title="Like"
            onPress={() => swiperRef.current.swipeRight()}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

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
