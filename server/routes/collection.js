const express = require("express");
const router = express.Router();
const axios = require("axios");

function splitText(text) {
	const lines = text.split("\n").filter((line) => line.trim() !== "");
	const result = [];

	lines.forEach((line) => {
		if (line.split(" ").length <= 300) {
			result.push(line.trim());
		} else {
			let words = line.split(" ");
			let currentLine = "";

			words.forEach((word) => {
				if ((currentLine + word).trim().split(" ").length <= 300) {
					currentLine += word + " ";
				} else {
					result.push(currentLine.trim());
					currentLine = word + " ";
				}
			});

			if (currentLine.trim() !== "") {
				result.push(currentLine.trim());
			}
		}
	});

	return result;
}

async function sendToSummarization(line) {
	try {
		const response = await fetch(process.env.SUMMARIZATION_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ content: line }),
		});
		const data = await response.json();
		return data.message.at(0).summary_text;
	} catch (err) {
		throw new Error(err.message);
	}
}

router.post("/", async (req, res) => {
	const { content, username } = req.body;

	try {
		const compressedLines = await Promise.all(
			splitText(content).map((line) => sendToSummarization(line)),
		);

		await axios.post(
			process.env.CHROMA_URL + "/collection",
			{
				profileId: username,
				content: compressedLines.join("\n"),
				knowledgeId: username,
			},
			{
				headers: {
					"x-api-key": process.env.CHROMA_API_KEY,
				},
			},
		);

		res.json({ message: compressedLines.join("\n") });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
