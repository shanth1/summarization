import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem("userData"),
	);

	const login = (userData) => {
		localStorage.setItem("userData", userData);
		console.log("LOGIN HOOK");
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem("userData");
		setIsAuthenticated(false);
	};

	const getUserData = () => {
		return JSON.parse(localStorage.getItem("userData"));
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, login, logout, getUserData }}
		>
			{children}
		</AuthContext.Provider>
	);
};
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

/*eslint-disable*/
export const useAuth = () => {
	return useContext(AuthContext);
};
