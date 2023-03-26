import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
