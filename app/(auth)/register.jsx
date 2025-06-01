import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

import ThemeView from '../../components/ThemeView';
import Spacer from '../../components/Spacer';
import ThemeText from '../../components/ThemeText';
import ThemeButton from '../../components/ThemeButton';

const register = () => {
	const handleSubmit = () => {
		console.log('test register');
	};
	return (
		<ThemeView style={styles.container}>
			<Spacer />
			<ThemeText title={true}>Register for an Account</ThemeText>

			<ThemeButton onPress={handleSubmit}>
				<Text style={{ color: '#f2f2f2' }}>Register</Text>
			</ThemeButton>
			<Spacer height={50} />
			<Link href='/login'>
				<ThemeText>Login Instead</ThemeText>
			</Link>
		</ThemeView>
	);
};

export default register;

const styles = StyleSheet.create({});
