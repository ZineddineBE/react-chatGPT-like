import { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "./context/useAuth";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAuth } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const url = "https://api.chat.maxencehammen.com/auth/login";
		const init = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		};

		fetch(url, init)
			.then((res) => {
				if (!res.ok) throw new Error("Failed to fetch!");
				return res.json();
			})
			.then((json) => {
				setAuth({ token: json.token, user: json.user });
			})
			.then(() => navigate("/"))
			.catch((err) => console.error("Erreur :", err.message));
	};

	return (
		<main className="connexion-page">
			<h1>Login page</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email :</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Mot de passe :</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
			<Link to="/auth/signin">Don't have an account? Register here</Link>
		</main>
	);
}
