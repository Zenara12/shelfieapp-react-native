import { useColorScheme, StyleSheet, Image } from 'react-native';

import LightLogo from '../assets/logo_light.png';
import DarkLogo from '../assets/logo_dark.png';

const ThemeLogo = ({ ...props }) => {
	const colorScheme = useColorScheme();
	const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
	return <Image source={logo} {...props} />;
};

export default ThemeLogo;
