import {useState } from 'react';
import {Link} from "react-router";


export default function SignInPage() {
    const [handle, setHandle] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://api.twitter.maxencehammen.com/auth/signin";
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                handle: handle,
                password: password
            })
        };
        if (password !== comfirmPassword) {
            alert("Passwords do not match");
            return;
        }
        fetch(url, init);
    };

    return (
		<main className="connexion-page">
			<h1>Register page</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Nom d'utilisateur :</label>
					<input
						type="text"
						id="username"
						name="username"
						value={handle}
						onChange={(e) => setHandle(e.target.value)}
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

				<div>
					<label htmlFor="password">Confirmer mot de passe :</label>
					<input
						type="password"
						id="password"
						name="password"
						value={comfirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>

				<button type="submit">Register</button>
			</form>
			<Link to="/auth/login">Already have an account? Login here</Link>
		</main>
	);
}