import "../styles/flashcard.css";
import blockchain_data from "../data/blockchain.js";
import bitcoin from "/bitcoin.png";

const Card = (props) => {
	const answers = blockchain_data.map((value) => value.answer);
	const questions = blockchain_data.map((value) => value.question);

	return (
		<>
			<div id="card" onClick={props.toggleCard}>
				<div id="card-inner" className={props.showAnswer ? "flipped" : ""}>
					<div className="front">
						<img id="card-img" src={bitcoin} alt="bitcoin-image" />
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
