import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";
import blockchain_data from "./data/blockchain.js";

function App() {
	// State to show default screen
	const [showDefault, setShowDefault] = useState(true);

	// State to track whether question or answer is shown
	const [showAnswer, setShowAnswer] = useState(false);

	// Function to toggle between showing question and showing answer
	const toggleCard = () => {
		setShowAnswer(!showAnswer);
	};

	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	return (
		<>
			<div id="shade-bg"></div>
			<div id="container">
				<Header currentCard={currentCardIndex} />
				<Card
					index={currentCardIndex}
					showDefault={showDefault}
					toggleCard={toggleCard}
					showAnswer={showAnswer}
				/>
			</div>
		</>
	);
}

export default App;
