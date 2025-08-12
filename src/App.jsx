import Navbar from "./Navbar.jsx"
import Routes from "./Routes.jsx";
import { BrowserRouter } from "react-router";

export default function App() {
	
	return (

        <BrowserRouter>
            <Navbar />
            <Routes />
        </BrowserRouter>
    )
}
