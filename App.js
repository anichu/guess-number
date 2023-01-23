import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	View,
	ImageBackground,
} from "react-native";
import AppLoading from "expo-app-loading";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from "expo-font";
export default function App() {
	const [number, setNumber] = useState("");
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRound, setGuessRounds] = useState(0);

	const setNumberHandler = (pickNumber) => {
		setNumber(pickNumber);
		setGameIsOver(false);
	};
	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const startNewGameHandler = () => {
		setNumber(null);
		setGuessRounds(0);
	};

	const gameOverHandler = (guessRounds) => {
		setGameIsOver(true);
		setGuessRounds(guessRounds);
	};
	let screen = <StartGameScreen setNumber={setNumberHandler}></StartGameScreen>;

	if (number) {
		screen = (
			<GameScreen gameOverHandler={gameOverHandler} userNumber={number} />
		);
	}

	if (gameIsOver && number) {
		screen = (
			<GameOverScreen
				userNumber={number}
				onStartNewGame={startNewGameHandler}
				roundsNumber={guessRound}
			/>
		);
	}
	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
				source={require("./assets/images/background.png")}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
