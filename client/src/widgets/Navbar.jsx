import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Avatar,
	Box,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
	const navigate = useNavigate();
	const username = Cookies.get("username");
	const avatarSrc = Cookies.get("avatarSrc");

	const handleLogout = () => {
		Cookies.remove("authToken");
		Cookies.remove("username");
		Cookies.remove("avatarSrc");

		navigate("/login");
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Box display="flex" alignItems="center" flexGrow={1}>
					{avatarSrc && (
						<Avatar
							src={avatarSrc}
							alt={username}
							sx={{ marginRight: 2 }}
						/>
					)}
					<Typography variant="h6">
						{username ? `Hello, ${username}` : "Welcome"}
					</Typography>
				</Box>
				<Button color="inherit" component={Link} to="/">
					Home
				</Button>
				<Button color="inherit" component={Link} to="/upload">
					Upload
				</Button>
				<Button color="inherit" component={Link} to="/query">
					Query
				</Button>
				<Button color="inherit" onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
