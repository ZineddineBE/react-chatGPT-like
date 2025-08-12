import { NavLink } from "react-router"; // ou "react-router" selon ta version

export default function ConversationItem({ conv }) {
	return (
		<NavLink to={`/conversations/${conv.id}`}>
			{({ isActive }) => (
				<div
					className={`conversation-item ${isActive ? "active-link" : ""}`}>
					{conv.firstMessage}
				</div>
			)}
		</NavLink>
	);
}
