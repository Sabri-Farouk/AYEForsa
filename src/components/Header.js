/*
	This header is gonna be used throught the app
	it's gonna appear in the top of every other component
*/

import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {

	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
		  <Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#013a6f',
		justifyContent: 'center',
		alignItems: 'center',
		height: 96,
		paddingTop: 15,
		shadowColor: '#001d38',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		color: "#FFFFFF",
		fontSize: 28
	}
};

// Make the componenent available to other parts of the app
export default Header;