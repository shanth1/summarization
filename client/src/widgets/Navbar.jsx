import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Avatar,
	Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../app/AuthContext";

const Navbar = () => {
	const { logout, getUserData } = useAuth();

	const handleLogout = () => {
		logout();
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Box display="flex" alignItems="center" flexGrow={1}>
					{getUserData().first_name && (
						<Avatar
							src={getUserData().photo_url}
							alt="#"
							sx={{ marginRight: 2 }}
						/>
					)}
					<Typography variant="h6">
						{getUserData().first_name
							? `${getUserData().first_name}`
							: getUserData().username
								? getUserData().username
								: "Unknown"}
					</Typography>{" "}
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
