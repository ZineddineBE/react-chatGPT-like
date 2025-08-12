import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; // ajoute useNavigate
import Message from "./Message.jsx";
import Input from "./Input.jsx";

export default function ConversationsPage() {
	const { id } = useParams();
	const navigate = useNavigate(); // initialisation de navigate
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const url = `https://api.chat.maxencehammen.com/conversations/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => setMessages(json.messages));
	}, [id]);

	const onSubmit = (text) => {
		const url = `https://api.chat.maxencehammen.com/conversations/${id}`;
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
				window.location.reload();
			})
			.then((res) => res.json())
			.then((json) => setMessages(json.messages))
			.catch((err) => {
				console.error("Erreur :", err.message);
			});
	};

	return (
		<main>
			
			<div className="conversation">
				{messages.map((message) => (
					<Message
						key={message.id}
						content={message.content}
						role={message.role}
					/>
				))}
			</div>

			<Input onSubmit={onSubmit} />
		</main>
	);
}
