import ShuffleButton from "./ShuffleButton";
import "../styles/card-controls.css";

const CardControls = ({ handleShuffe }) => {
	return (
		<div id="card-controls">
			<div className="card-controls-inner">
				<ShuffleButton handleShuffle={handleShuffe} />
			</div>
		</div>
	);
};

export default CardControls;
