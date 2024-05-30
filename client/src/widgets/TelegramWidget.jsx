import { useEffect, useRef } from "react";
import axios from "axios";
import { useAuth } from "../app/AuthContext";

const TelegramWidget = () => {
	const telegramButtonRef = useRef(null);
	const { login } = useAuth();

	useEffect(() => {
		window.onTelegramAuth = async (user) => {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;
			const endpoint = "/auth";
			try {
				const response = await axios.get(`${backendUrl}${endpoint}`, {
					params: user,
				});

				if (response.status >= 200 && response.status < 300) {
					const data = response.data;

					console.log("Response data:", data);
					login(data.token);
				} else {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
			} catch (error) {
				console.error("Error:", error);
			}
			console.log(
				`Logged in as ${user.first_name} ${user.last_name} (${user.id}${
					user.username ? `, @${user.username}` : ``
				})`,
			);
		};

		const script = document.createElement("script");
		script.async = true;
		script.src = "https://telegram.org/js/telegram-widget.js?22";
		script.setAttribute("data-telegram-login", "shanth1_auth_bot");
		script.setAttribute("data-size", "large");
		script.setAttribute("data-onauth", "onTelegramAuth(user)");
		script.setAttribute("data-request-access", "write");

		telegramButtonRef.current.appendChild(script);
	}, []);

	return <div ref={telegramButtonRef} id="telegram-login-button"></div>;
};

export default TelegramWidget;
