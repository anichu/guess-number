import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
	console.log(children);
	return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 100,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		marginHorizontal: 24,
		elevation: 4,
		// this is for ios shadow
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
