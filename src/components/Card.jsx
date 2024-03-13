import "../styles/flashcard.css";
import blockchain_data from "../data/blockchain.js";

const Card = (props) => {
	const answers = blockchain_data.map((value) => value.answer);
	const questions = blockchain_data.map((value) => value.question);

	return (
		<>
			<div id="card" onClick={props.toggleCard}>
				<div onClick={props.switchCards} id="left-card-arrow" className="card-arrow">
					<i className="fa-solid fa-arrow-left"></i>
				</div>
				<div onClick={props.switchCards} id="right-card-arrow" className="card-arrow">
					<i className="fa-solid fa-arrow-right"></i>
				</div>
				<div id="card-inner" className={props.showAnswer ? "flipped" : ""}>
					<div className="front">
						{/* <img id="card-img" src={bitcoin} alt="bitcoin-image" /> */}
						{props.showDefault
							? "Click here to show the back of the card"
							: questions[props.index]}
					</div>
					<div className="back">
						{props.showDefault
							? "Click the Next Arrow below to begin"
							: answers[props.index]}
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
