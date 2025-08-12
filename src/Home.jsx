import Input from "./Input.jsx";
import { useNavigate } from "react-router";

export default function Home() {
	const navigate = useNavigate();

	const onSubmit = (text) => {
		const url = "https://api.chat.maxencehammen.com/conversations";
		const init = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: text,
			}),
		};
		fetch(url, init)
			.then((res) => {
				if (!res.ok) {
					throw new Error(
						"Erreur lors de la création de la conversation"
					);
				}
				return res.json();
			})
			.then((data) => {
				navigate(`/conversations/${data.id}`);
				window.location.reload();
			})
			.catch((err) => {
				console.error("Erreur :", err.message);
			});
	};

	return (
		<main>
			<Input onSubmit={onSubmit} />
		</main>
	);
}
