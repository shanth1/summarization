import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import darkTheme from "./app/theme";
import Navbar from "./widgets/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Query from "./pages/Query";
import Login from "./pages/Login";

const App = () => {
	const isAuthenticated = !!Cookies.get("authToken");
	console.log("AUTH", isAuthenticated);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Router>
				{isAuthenticated ? (
					<>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/upload" element={<Upload />} />
							<Route path="/query" element={<Query />} />
							<Route
								path="*"
								element={<Navigate to="/" />}
							/>{" "}
						</Routes>
					</>
				) : (
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route
							path="*"
							element={<Navigate to="/login" />}
						/>{" "}
					</Routes>
				)}
			</Router>
		</ThemeProvider>
	);
};

export default App;
