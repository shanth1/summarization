import TelegramWidget from "../widgets/TelegramWidget";
import { Box } from "@mui/material";

const Login = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<TelegramWidget />
		</Box>
	);
};

export default Login;
