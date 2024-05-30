import { useState } from "react";
import { Box, Grid, Button, TextField, Typography } from "@mui/material";

const Query = () => {
	const [message, setMessage] = useState("");
	const [submittedMessage, setSubmittedMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmittedMessage(message);
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
							InputProps={{ style: { height: "56px" } }} // Устанавливаем высоту текстового поля
						/>
					</Grid>
					<Grid item xs={12} md={2}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
							sx={{ height: "56px" }} // Устанавливаем высоту кнопки
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
			{submittedMessage && (
				<Box mt={4}>
					<Typography variant="h6">Submitted Message:</Typography>
					<Typography variant="body1" mt={2}>
						{submittedMessage}
					</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Query;
