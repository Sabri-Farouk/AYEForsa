/*
	This is the main navigation bar component
	this component will be shown everywhere in the app (just like the header)
	and it offers the possibility to go from one "page" to the other directly and from anywhere in the app
*/

import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const MainNavBar = () => {
	return (
		<View style={styles.barStyle}>
		  <Button text={"Foras"} />
		  <Button text={"7ot Forsa"} />
		  <Button text={"Pro"} />
		</View>
	);
};


const styles = {
  barStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};


export default MainNavBar;