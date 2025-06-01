import { StyleSheet, Text } from 'react-native';

import { Link } from 'expo-router';
import ThemeView from '../components/ThemeView';
import ThemeCard from '../components/ThemeCard';
import ThemeLogo from '../components/ThemeLogo';
import Spacer from '../components/Spacer';
import ThemeText from '../components/ThemeText';

const Home = () => {
	return (
		<ThemeView style={styles.container}>
			<ThemeLogo />
			<Spacer height={20} />
			<ThemeText style={styles.title} title={true}>
				Number 1
			</ThemeText>
			<Spacer />

			<ThemeText>Reading List</ThemeText>
			<ThemeCard style={styles.card}>
				<ThemeText>Card Sample</ThemeText>
			</ThemeCard>
			<Link href='/login' style={styles.link}>
				<ThemeText>Go to Login</ThemeText>
			</Link>
			<Link href='/register' style={styles.link}>
				<ThemeText>Go to Register</ThemeText>
			</Link>
			<Link href='/profile' style={styles.link}>
				<ThemeText>Profile</ThemeText>
			</Link>
		</ThemeView>
	);
};

export default Home;

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
	link: {
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
	},
});
