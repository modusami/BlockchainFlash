const Streak = ({ streak, longestStreak }) => {
	return (
		<>
			<div id="streak-container">
				<div id="streak-inner">
					<div>
						<span>Current Streak: </span>
						<span id="streak">{streak}</span>
					</div>
					<span id="longestStreak">Longest Streak: {longestStreak}</span>
				</div>
			</div>
		</>
	);
};

export default Streak;
