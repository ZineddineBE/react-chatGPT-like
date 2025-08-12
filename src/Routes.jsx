import { Routes, Route } from "react-router";
import Home from "./Home.jsx";
import ConversationPage from "./ConversationPage.jsx";
import LoginPage from "./LoginPage.jsx";
import SignInPage from "./SignInPage.jsx";

export default function AppRoutes() {
    return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/conversations/:id" element={<ConversationPage />} />
			<Route path="/auth/login" element={<LoginPage />} />
			<Route path="/auth/signin" element={<SignInPage />} />
		</Routes>
	);
}

