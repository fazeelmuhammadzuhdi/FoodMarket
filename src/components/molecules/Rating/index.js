import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {IcStarOff, IcStarOn} from '../../../assets';
import Number from '../Number';

const Rating = ({number}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>{renderStar()}</View>
      <Number number={number} type="decimal" style={styles.numberRating} />
      {/* <Text>{number}</Tex> */}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },

  ratingContainer: {
    flexDirection: 'row',
    textAlign: 'center',
  },

  numberRating: {fontSize: 12, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
});
