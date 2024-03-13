import { useState } from "react";
import "../styles/answer.css";
const InputAnswer = ({ answer, handleAnswer, handleSubmit, showBox }) => {
	return showBox ? (
		<div id="answer-div">
			<input type="text" name="answer" id="answer" value={answer} onChange={handleAnswer} />
			<button onClick={handleSubmit} type="submit" id="answer-btn">
				Submit
			</button>
		</div>
	) : (
		<div id="answer-div"></div>
	);
};

export default InputAnswer;
