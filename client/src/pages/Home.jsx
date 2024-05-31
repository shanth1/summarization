import {
	Container,
	Typography,
	Box,
	Paper,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";

const Home = () => {
	return (
		<Container maxWidth="md">
			<Box my={4}>
				<Typography variant="h3" component="h1" gutterBottom>
					Document Summarization and Vector Storage Project
				</Typography>
				<Typography variant="body1" paragraph>
					This project aims to provide a comprehensive solution for
					document summarization and storage in vector representation
					for fast and efficient search. The system allows users to
					input text, parse websites, or upload documents, which are
					then broken down into fragments. Each fragment undergoes a
					summarization process using a T5 model. These summarized
					fragments are sent to a vector backend, where embeddings are
					created using a BERT model and stored in a vector database.
					Users can then query the system to retrieve semantically
					dense and concise fragments from all documents.
				</Typography>

				<Typography variant="h4" component="h2" gutterBottom>
					Features
				</Typography>
				<List>
					<ListItem>
						<ListItemText primary="Text Input and Parsing: Users can input text directly, use an API for website parsing, or upload documents." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Summarization: Text fragments are summarized using a T5 model." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Vector Storage: Summarized fragments are converted into embeddings using a BERT model and stored in a vector database." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Fast Search: Retrieve semantically dense and concise fragments from all documents based on user queries." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Authorization: User authentication via Telegram." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Microservices: Custom microservices for website parsing, file reading, and vector database management." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Reverse Proxy and HTTPS: Managed by Traefik." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Docker Compose: For building and deploying the entire stack." />
					</ListItem>
				</List>

				<Typography variant="h4" component="h2" gutterBottom>
					Technology Stack
				</Typography>
				<List>
					<ListItem>
						<ListItemText primary="Frontend: React" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Backend: Express.js" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Summarization Service: FastAPI" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Reverse Proxy: Traefik" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Containerization: Docker Compose" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Authentication: Telegram" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Microservices: Custom services for parsing websites, reading files, and vector database with BERT embeddings" />
					</ListItem>
				</List>

				<Typography variant="h4" component="h2" gutterBottom>
					Architecture
				</Typography>
				<Paper elevation={3}>
					<img
						src="assets/architecture.png"
						alt="Architecture Diagram"
						style={{ width: "100%" }}
					/>
				</Paper>

				<Typography variant="h4" component="h2" gutterBottom>
					Example
				</Typography>
				<Paper elevation={3}>
					<img
						src="assets/example.png"
						alt="Example Workflow"
						style={{ width: "100%" }}
					/>
				</Paper>

				<Typography variant="h4" component="h2" gutterBottom>
					Getting Started
				</Typography>
				<Typography variant="h5" component="h3" gutterBottom>
					Prerequisites
				</Typography>
				<Typography variant="body1" paragraph>
					Docker and Docker Compose installed on your machine.
				</Typography>

				<Typography variant="h5" component="h3" gutterBottom>
					Installation
				</Typography>
				<Typography variant="body1" paragraph>
					1. Clone the repository:
				</Typography>
				<Paper
					elevation={3}
					style={{ padding: "16px", backgroundColor: "#272727" }}
				>
					<Typography variant="body2" component="pre">
						{`git clone https://github.com/yourusername/your-repo.git
cd your-repo`}
					</Typography>
				</Paper>
				<Typography variant="body1" paragraph>
					2. Set up environment variables: Create a `.env` file in the
					root directory and add the necessary environment variables.
				</Typography>
				<Typography variant="body1" paragraph>
					3. Build and start the services using Docker Compose:
				</Typography>
				<Paper
					elevation={3}
					style={{ padding: "16px", backgroundColor: "#272727" }}
				>
					<Typography variant="body2" component="pre">
						{`docker-compose up --build`}
					</Typography>
				</Paper>

				<Typography variant="h5" component="h3" gutterBottom>
					Usage
				</Typography>
				<Typography variant="body1" paragraph>
					1. <b>Frontend</b>: Access the React frontend at
					`http://localhost:3000`.
				</Typography>
				<Typography variant="body1" paragraph>
					2. <b>API</b>: Interact with the Express.js backend and
					FastAPI summarization service.
				</Typography>
				<Typography variant="body1" paragraph>
					3. <b>Authentication</b>: Authenticate using Telegram.
				</Typography>
				<Typography variant="body1" paragraph>
					4. <b>Querying</b>: Use the frontend or API to query the
					vector database and retrieve summarized fragments.
				</Typography>

				<Typography variant="h4" component="h2" gutterBottom>
					Contributing
				</Typography>
				<Typography variant="body1" paragraph>
					We welcome contributions!
				</Typography>

				<Typography variant="h4" component="h2" gutterBottom>
					License
				</Typography>
				<Typography variant="body1" paragraph>
					This project is licensed under the MIT License.
				</Typography>

				<Typography variant="h4" component="h2" gutterBottom>
					Contact
				</Typography>
				<Typography variant="body1" paragraph>
					For any questions or suggestions, please open an issue or
					contact us at [shanthi.bunch@gmail.com].
				</Typography>
			</Box>
		</Container>
	);
};

export default Home;
