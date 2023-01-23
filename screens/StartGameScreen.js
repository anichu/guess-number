import React, { useState } from "react";
import {
	TextInput,
	View,
	Text,
	StyleSheet,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ setNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");
	const textHandler = (value) => {
		setEnteredNumber(value);
	};
	function resetInputHandler() {
		setEnteredNumber("");
	}
	const confirmHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number",
				"Number has to be a number between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}

		setNumber(chosenNumber);
	};
	return (
		<ScrollView>
			<KeyboardAvoidingView>
				<View style={styles.rootContainer}>
					<Title>Guess My Number</Title>
					<Card>
						<Text style={styles.instructionText}>Enter a Number</Text>
						<TextInput
							style={{ ...styles.numberInput }}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={textHandler}
							maxLength={2}
							value={enteredNumber}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		borderLeftColor: "none",
		outlineStyle: "none",
		textAlign: "center",
	},

	buttonsContainer: {
		flexDirection: "row",
		width: 300,
	},

	buttonContainer: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
	},
	instructionText: {
		color: Colors.primary500,
		fontSize: 24,
	},
});
