import { StyleSheet, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
const ThemeButton = ({ style, ...props }) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
			{...props}
		/>
	);
};

export default ThemeButton;

const styles = StyleSheet.create({
	btn: {
		backgroundColor: Colors.primary,
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},
	pressed: {
		opacity: 0.7,
	},
});
