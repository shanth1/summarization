const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
	const { username, message } = req.body;
	const chromaUrl = process.env.CHROMA_URL + "/query";
	try {
		const response = await axios.post(
			chromaUrl,
			{
				profileId: username,
				query: message,
				// knowledges: knowledgeVectors.map((el) => el["id"]),
				wordLimit: 100,
			},
			{
				headers: {
					"x-api-key": process.env.CHROMA_API_KEY,
				},
			},
		);
		res.send(response.data);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
