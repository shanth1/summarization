import { useState } from "react";
import {
	Box,
	Grid,
	ToggleButton,
	ToggleButtonGroup,
	Button,
	TextField,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Fab,
	CircularProgress,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import HttpIcon from "@mui/icons-material/Http";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import axios from "axios";

const Upload = () => {
	const [selectedOption, setSelectedOption] = useState("parsing");
	const [url, setUrl] = useState("");
	const [selector, setSelector] = useState("");
	const [depth, setDepth] = useState(1);
	const [file, setFile] = useState(null);
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		const backendUrl = import.meta.env.VITE_BACKEND_URL;
		const endpoint = "/collection";

		setLoading(true);
		const username = JSON.parse(localStorage.getItem("userData")).username;
		try {
			const response = await axios.post(`${backendUrl}${endpoint}`, {
				content,
				username,
			});
			console.log(response.data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	const handleOptionChange = (_, newOption) => {
		if (newOption !== null) {
			setSelectedOption(newOption);
		}
	};

	const handleApiSubmit = () => {
		console.log("Form submitted with option:", selectedOption);
		if (selectedOption === "parsing") {
			console.log("URL:", url);
			console.log("Selector:", selector);
			console.log("Depth:", depth);
		} else if (selectedOption === "files") {
			console.log("File:", file);
		}
	};

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	return (
		<Box p={2}>
			<Typography variant="h4" mb={2}>
				Upload Page
			</Typography>
			<Grid container spacing={2} alignItems="stretch">
				<Grid item xs={12} md={4}>
					<Box display="flex" flexDirection="column" height="100%">
						<ToggleButtonGroup
							value={selectedOption}
							exclusive
							onChange={handleOptionChange}
							fullWidth
						>
							<ToggleButton value="parsing" fullWidth>
								Parsing
							</ToggleButton>
							<ToggleButton value="files" fullWidth>
								Files
							</ToggleButton>
						</ToggleButtonGroup>
						{selectedOption === "parsing" && (
							<Box mt={2} flex="1">
								<TextField
									label="URL"
									variant="outlined"
									fullWidth
									value={url}
									onChange={(e) => setUrl(e.target.value)}
									margin="normal"
								/>
								<TextField
									label="Selector"
									variant="outlined"
									fullWidth
									value={selector}
									onChange={(e) =>
										setSelector(e.target.value)
									}
									margin="normal"
								/>
								<FormControl
									fullWidth
									variant="outlined"
									margin="normal"
								>
									<InputLabel id="depth-label">
										Depth
									</InputLabel>
									<Select
										labelId="depth-label"
										value={depth}
										onChange={(e) =>
											setDepth(e.target.value)
										}
										label="Depth"
									>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
									</Select>
								</FormControl>
								<Box
									mt={2}
									display="flex"
									justifyContent="flex-end"
								>
									<Button
										variant="contained"
										color="success"
										onClick={handleApiSubmit}
										startIcon={<HttpIcon />}
									>
										Кчау
									</Button>
								</Box>
							</Box>
						)}
						{selectedOption === "files" && (
							<Box mt={2} flex="1">
								<Button
									variant="contained"
									component="label"
									fullWidth
								>
									Upload File
									<input
										type="file"
										hidden
										onChange={handleFileChange}
									/>
								</Button>
								{file && (
									<Typography variant="body2" mt={2}>
										Selected file: {file.name}
									</Typography>
								)}
								<Box
									mt={2}
									display="flex"
									justifyContent="flex-end"
								>
									<Button
										variant="contained"
										color="success"
										onClick={handleApiSubmit}
										startIcon={<DocumentScannerIcon />}
									>
										Scan File
									</Button>
								</Box>
							</Box>
						)}
					</Box>
				</Grid>
				<Grid item xs={12} md={8}>
					<Box display="flex" flexDirection="column" height="100%">
						<TextField
							label="Text Area"
							multiline
							value={content}
							onChange={(e) => {
								setContent(e.target.value);
							}}
							rows={14}
							variant="outlined"
							fullWidth
							flex="1"
						/>
					</Box>
				</Grid>
			</Grid>
			<Fab
				color="success"
				aria-label="submit"
				onClick={handleSubmit}
				disabled={loading}
				sx={{
					position: "fixed",
					bottom: 32,
					right: 32,
				}}
			>
				{loading ? <CircularProgress size={20} /> : <SendIcon />}
			</Fab>
		</Box>
	);
};

export default Upload;
