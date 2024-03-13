import "../styles/flashcard.css";

const Card = (props) => {
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
							: props.questions}
					</div>
					<div className="back">
						{props.showDefault ? "Click the Next Arrow below to begin" : props.answers}
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
