import { useState } from "react";
import "../styles/answer.css";
const InputAnswer = (props) => {
	const [answer, setAnswer] = useState("");

	const handleAnswer = (e) => {
		setAnswer(e.target.value);
	};

	return (
		<div id="answer-div">
			<input type="text" name="answer" id="answer" value={answer} onChange={handleAnswer} />
			<button id="answer-btn">Enter</button>
		</div>
	);
};

export default InputAnswer;
