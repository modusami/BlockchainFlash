const ShuffleButton = ({ handleShuffle }) => {
	return (
		<div id="shuffle-div">
			<i class="fa-solid fa-shuffle" onClick={handleShuffle}></i>
		</div>
	);
};

export default ShuffleButton;
