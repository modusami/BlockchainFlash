import Description from "./HeaderC/Description";
import NumberOfCards from "./HeaderC/NumberOfCards";
import Title from "./HeaderC/Title";
import blockchain_data from "../data/blockchain";
import "../styles/header.css";

const Header = () => {
	return (
		<>
			<div id="header">
				<Title text="BlockchainFlash" />
				<Description text="Your go-to flashcard app for mastering blockchain concepts quickly and easily." />
				<NumberOfCards
					text="Number of cards: "
					numCards={blockchain_data.length ? blockchain_data.length : 0}
				/>
			</div>
		</>
	);
};

export default Header;
