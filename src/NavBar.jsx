import { Link } from "react-router";
import Conversations from "./ConversationsList.jsx";
import "./styles/style.css";

function Logo() {
	return (
		<h2>
			<Link to="/">Z-GPT</Link>
		</h2>
	);
}

function ButtonLogin() {
	return (
		<span>
			<Link to="/auth/login">Login</Link>
		</span>
	);
}

function ButtonSignIn() {
	return (
		<span>
			<Link to="/auth/signin">Sign In</Link>
		</span>
	);
}

export default function Navbar() {
	return (
		<header>
			<Logo />
			<Conversations />
			<ButtonLogin />
			<ButtonSignIn />
		</header>
	);
}
