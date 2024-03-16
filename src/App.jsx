import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";
import blockchain_data from "./data/blockchain.js";
import InputAnswer from "./components/InputAnswer.jsx";
import CardControls from "./components/CardControls.jsx";

function App() {
	// question and answers
	const [data, setData] = useState(blockchain_data);

	const [userStreak, setUserStreak] = useState(0);
	const [longestStreak, setLongestStreak] = useState(0);

	// State to show default screen
	const [showDefault, setShowDefault] = useState(true);

	// State to track whether question or answer is shown
	const [showAnswer, setShowAnswer] = useState(false);

	// Function to toggle between showing question and showing answer
	const toggleCard = () => {
		setShowAnswer(!showAnswer);
	};

	// for the input box
	const [answer, setAnswer] = useState("");
	const handleAnswer = (e) => {
		setAnswer(e.target.value);
	};

	// show whether the input box appears
	const [showInputBox, setInputBox] = useState(false);

	// handles submitting an answer
	const [correctStatus, setCorrectStatus] = useState("none");
	const handleSubmit = (e) => {
		e.preventDefault();
		const answers = data[currentCardIndex].answer;
		if (answer.toLowerCase() == answers.toLowerCase()) {
			setCorrectStatus("correct");
			setUserStreak(userStreak + 1);
		} else if (answers.toLowerCase().startsWith(answer.toLowerCase())) {
			setCorrectStatus("partial");
		} else {
			setCorrectStatus("wrong");
			if (userStreak > 0) {
				setLongestStreak(userStreak);
			}
			setUserStreak(0);
		}
		setShowAnswer(false);
	};

	// for switching cards
	const switchCards = (e) => {
		e.stopPropagation();
		setCorrectStatus("none");

		if (!showDefault) {
			if (e.target.className.includes("left")) {
				// go backwards, if you reach last card, restart
				currentCardIndex > 0
					? setCurrentCardIndex(currentCardIndex - 1)
					: setCurrentCardIndex(0);
			} else {
				currentCardIndex < blockchain_data.length - 1
					? setCurrentCardIndex(currentCardIndex + 1)
					: setCurrentCardIndex(blockchain_data.length - 1);
			}
		}

		setShowAnswer(false);
		setInputBox(true);
		setShowDefault(false);
	};

	const handleShuffe = (event) => {
		event.stopPropagation();
		if (!showDefault) {
			var j, x, i;
			const tempData = data.slice(0, data.length);
			for (i = tempData.length - 1; i >= 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = tempData[i];
				tempData[i] = tempData[j];
				tempData[j] = x;
			}
			setCurrentCardIndex(0);
			setData(tempData);
		}
	};

	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	return (
		<>
			<div id="shade-bg"></div>
			<div id="container">
				<Header userStreak={userStreak} longestStreak={longestStreak} />
				<Card
					showDefault={showDefault}
					toggleCard={toggleCard}
					showAnswer={showAnswer}
					switchCards={switchCards}
					data={data[currentCardIndex]}
					isCorrect={correctStatus}
				/>

				<InputAnswer
					answer={answer}
					handleAnswer={handleAnswer}
					handleSubmit={handleSubmit}
					showBox={showInputBox}
				/>

				<CardControls handleShuffe={handleShuffe} />
			</div>
		</>
	);
}

export default App;
