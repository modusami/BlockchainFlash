const ShuffleButton = ({ handleShuffle }) => {
	return (
		<div id="shuffle-div">
			<i className="fa-solid fa-shuffle" onClick={handleShuffle}></i>
			<span id="shuffle-cards-span">Shuffle Cards</span>
		</div>
	);
};

export default ShuffleButton;
