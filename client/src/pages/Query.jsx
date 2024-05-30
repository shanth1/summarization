import { useState } from "react";
import axios from "axios";
import {
	Box,
	Grid,
	Button,
	TextField,
	Typography,
	CircularProgress,
} from "@mui/material";

const Query = () => {
	const [message, setMessage] = useState("");
	const [submittedMessage, setSubmittedMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const backendUrl = import.meta.env.VITE_BACKEND_URL;
		const endpoint = "/query";
		const username = JSON.parse(localStorage.getItem("userData")).username;

		setLoading(true);
		try {
			const response = await axios.post(`${backendUrl}${endpoint}`, {
				username,
				message,
			});
			setSubmittedMessage(response.data);
		} catch (err) {
			console.error(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box p={2}>
			<Typography variant="h4" mb={2} textAlign="center">
				Query Page
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid
					container
					justifyContent="center"
					spacing={2}
					alignItems="center"
				>
					<Grid item xs={12} md={8}>
						<TextField
							label="Enter your message"
							variant="outlined"
							fullWidth
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							InputProps={{ style: { height: "56px" } }}
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							disabled={loading}
							sx={{ height: "56px" }}
							startIcon={
								loading && <CircularProgress size={20} />
							}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
			{submittedMessage && (
				<Box mt={4}>
					<Typography variant="h6">Semantic answer:</Typography>
					<Typography variant="body1" mt={2}>
						{submittedMessage}
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Query;
