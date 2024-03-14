const Streak = (props) => {
	return (
		<>
			<div id="num-cards-div">
				<p id="num-cards">
					<span>{props.text}</span>
					<span id="numCardsTxt">{props.numCards}</span>
				</p>
			</div>
		</>
	);
};

export default Streak;
