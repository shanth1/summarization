import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					My Material-UI App
				</Typography>
				<Button color="inherit" component={Link} to="/">
					Home
				</Button>
				<Button color="inherit" component={Link} to="/upload">
					Upload
				</Button>
				<Button color="inherit" component={Link} to="/query">
					Query
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
