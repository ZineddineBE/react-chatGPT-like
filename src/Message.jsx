export default function Message({ content, role }) {
	const isUser = role === "user";

	const userAvatar = "https://cdn-icons-png.flaticon.com/512/147/147144.png";
	const assistantAvatar =
		"https://cdn-icons-png.flaticon.com/512/4712/4712035.png";

	return (
		<div
			style={{
				display: "flex",
				justifyContent: isUser ? "flex-end" : "flex-start",
				margin: "8px 0",
				alignItems: "flex-end",
				gap: "8px",
			}}>
			{!isUser && (
				<img
					src={assistantAvatar}
					alt="Assistant avatar"
					style={{
						width: 32,
						height: 32,
						borderRadius: "50%",
						border: "1px solid black",
					}}
				/>
			)}

			<div
				style={{
					backgroundColor: isUser ? "#66b5fa" : "#dcf8c6",
					color: "#333",
					padding: "10px 14px",
					borderRadius: "16px",
					maxWidth: "60%",
					border: "1px solid black",
				}}>
				<p style={{ margin: 0 }}>{content}</p>
			</div>

			{isUser && (
				<img
					src={userAvatar}
					alt="User avatar"
					style={{
						width: 32,
						height: 32,
						borderRadius: "50%",
						border: "1px solid black",
					}}
				/>
			)}
		</div>
	);
}
