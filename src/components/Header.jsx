import Description from "./HeaderC/Description";
import Streak from "./HeaderC/Streak";
import Title from "./HeaderC/Title";
import "../styles/header.css";

const Header = (props) => {
	return (
		<>
			<div id="header">
				<Title text="BlockchainFlash" />
				<Description text="Your go-to flashcard app for mastering blockchain concepts quickly and easily." />
				<Streak streak={props.userStreak} longestStreak={props.longestStreak} />
			</div>
		</>
	);
};

export default Header;
