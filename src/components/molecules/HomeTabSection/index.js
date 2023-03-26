/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Recomended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
