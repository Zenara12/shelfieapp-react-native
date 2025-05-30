import { Slot, Stack } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme] ?? Colors.light;
	return (
		<>
			<StatusBar value='auto' />
			<Stack
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.navBackground,
					},
					headerTintColor: theme.title,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name='index'
					options={{
						title: 'Home',
					}}
				/>
				<Stack.Screen
					name='about'
					options={{
						title: 'Abouts',
					}}
				/>

				<Stack.Screen
					name='settings/index'
					options={{
						title: 'Settings',
					}}
				/>
			</Stack>
		</>
	);
};

export default RootLayout;

const styles = StyleSheet.create({});
