const Streak = ({ streak, longestStreak }) => {
	return (
		<>
			<div id="num-cards-div">
				<p id="num-cards">
					<span>Current Streak: </span>
					<span id="streak">{streak}</span>
					<p id="longestStreak">Longest Streak: {longestStreak}</p>
				</p>
			</div>
		</>
	);
};

export default Streak;
