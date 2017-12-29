/*
	This file is the main entry of our application
	It's purpose should always be to create the main Component (the entry point to our app)
	and register it
*/

import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';
import Auth from './src/components/Auth';
import MainNavBar from './src/components/MainNavBar';

// Creating the main component
const App = () => (
	<View>
	  <Header headerText={'AYE Forsa'} />
	  <MainNavBar />
	  <Auth />
	</View>
);


AppRegistry.registerComponent('AYEForsa', () => App);