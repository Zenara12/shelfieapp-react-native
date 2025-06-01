import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

import ThemeView from '../../components/ThemeView';
import Spacer from '../../components/Spacer';
import ThemeText from '../../components/ThemeText';
import ThemeButton from '../../components/ThemeButton';

const login = () => {
	const handleSubmit = () => {
		console.log('test login');
	};
	return (
		<ThemeView style={styles.container}>
			<Spacer />
			<ThemeText title={true} style={styles.title}>
				Please Login to Continue
			</ThemeText>

			<ThemeButton onPress={handleSubmit}>
				<Text style={{ color: '#f2f2f2' }}>Login</Text>
			</ThemeButton>

			<Spacer height={50} />
			<Link href='/register'>
				<ThemeText style={{ textAlign: 'center' }}>Register Instead</ThemeText>
			</Link>
		</ThemeView>
	);
};

export default login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		marginBottom: 20,
		fontSize: 24,
		fontWeight: 'bold',
	},
});
