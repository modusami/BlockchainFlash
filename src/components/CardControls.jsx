import ShuffleButton from "./ShuffleButton";
import "../styles/card-controls.css";

const CardControls = ({ handleShuffe }) => {
	return (
		<div id="card-controls">
			<div className="card-controls-inner">
				<ShuffleButton handleShuffle={handleShuffe} /> <span id="divider">|</span>
			</div>
		</div>
	);
};

export default CardControls;
