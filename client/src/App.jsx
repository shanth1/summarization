import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import darkTheme from "./app/theme";
import Navbar from "./widgets/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Query from "./pages/Query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/upload" element={<Upload />} />
					<Route path="/query" element={<Query />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
