import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import TextField from './TextField';

const Auth = () => {
  return (
    <View style = {styles.viewStyle}>
      <TextField text={"Email"} />
      <TextField text={"Mot de Passe"} />
    </View>
  );
};

const styles = {
  viewStyle: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Auth;