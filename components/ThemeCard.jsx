import { View, useColorScheme, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
const ThemeCard = ({ style, ...props }) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme] ?? Colors.light;
	return (
		<View
			style={[
				{
					backgroundColor: theme.uiBackground,
				},
				styles.card,
				style,
			]}
			{...props}
		/>
	);
};

export default ThemeCard;

const styles = StyleSheet.create({
	card: {
		padding: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
