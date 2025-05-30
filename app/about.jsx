import { Link } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import ThemeView from '../components/ThemeView';
import ThemeText from '../components/ThemeText';

const About = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme] ?? Colors.light;
	return (
		<ThemeView style={styles.container}>
			<ThemeText style={[styles.title, '']}>About</ThemeText>
		</ThemeView>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
