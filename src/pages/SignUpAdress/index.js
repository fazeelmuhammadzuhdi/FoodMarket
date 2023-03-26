import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Adress"
        subTitle="Make Sure It's Valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="Phono No." placeholder="Type Your Phone Number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type Your Address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type Your House Number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
