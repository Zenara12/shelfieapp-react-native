import { StyleSheet, Text, View } from 'react-native';
import ThemeView from '../../components/ThemeView';
import ThemeText from '../../components/ThemeText';

const Settings = () => {
	return (
		<ThemeView style={styles.container}>
			<ThemeText style={styles.title}>Settings</ThemeText>
		</ThemeView>
	);
};

export default Settings;

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
