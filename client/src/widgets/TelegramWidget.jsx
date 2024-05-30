import Cookies from "js-cookie";
import { useEffect } from "react";

const TelegramWidget = () => {
	useEffect(() => {
		window.onTelegramAuth = (user) => {
			Cookies.set("authToken", user.id, {
				sameSite: "None",
				secure: true,
			});
			alert(
				`Logged in as ${user.first_name} ${user.last_name} (${user.id}${user.username ? ", @" + user.username : ""})`,
			);
		};

		const script = document.createElement("script");
		script.async = true;
		script.src = "https://telegram.org/js/telegram-widget.js?22";
		script.setAttribute("data-telegram-login", "shanth1_auth_bot");
		script.setAttribute("data-size", "large");
		script.setAttribute("data-onauth", "onTelegramAuth(user)");
		script.setAttribute("data-request-access", "write");

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return <div id="telegram-login-button"></div>; // Контейнер для виджета
};

export default TelegramWidget;
