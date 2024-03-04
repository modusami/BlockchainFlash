import "../styles/flashcard.css";
import { useState } from "react";
import blockchain_data from "../data/blockchain.js";

const Card = (props) => {
	const answers = blockchain_data.map((value) => value.answer);
	const questions = blockchain_data.map((value) => value.question);

	return (
		<>
			<div id="card" onClick={props.toggleCard}>
				<div id="card-inner" className={props.showAnswer ? "flipped" : ""}>
					<div className="front">
						{props.showDefault
							? "Click here to show the back of the card"
							: questions[props.index]}
					</div>
					<div className="back">
						{props.showDefault
							? "Click the Next Card button below to begin"
							: answers[props.index]}
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
