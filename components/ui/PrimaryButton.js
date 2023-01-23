import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOutterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnercontainer, styles.pressed]
						: styles.buttonInnercontainer
				}
				onPress={onPress}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOutterContainer: {
		margin: 4,
		borderRadius: 28,
		overflow: "hidden",
	},
	buttonInnercontainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 4,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
