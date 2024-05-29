import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./widgets/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Query from "./pages/Query";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/query" element={<Query />} />
			</Routes>
		</Router>
	);
};

export default App;
