import { useEffect, useState } from "react";
import ConversationItem from "./ConversationItem.jsx";


export default function ConversationsList() {

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://api.chat.maxencehammen.com/conversations")
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<div className="conversations-container">
			{data.map((conversation) => (
				<ConversationItem key={conversation.id} conv={conversation} />
			))}
		</div>
	);
}
