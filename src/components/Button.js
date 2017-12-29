import React from 'react';
import { Text, View } from 'react-native';

const Button = (props) => {
	return (
		<View style = {styles.buttonStyle} >
		  <Text style = {styles.textStyle} >{props.text}</Text>
		</View>
	);
};

const styles = {
  buttonStyle: {
    backgroundColor: "#ea7025"
  },
  textStyle: {
  	color: "#8bb2cf"
  }
};

export default Button;