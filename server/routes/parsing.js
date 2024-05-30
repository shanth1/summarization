const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const { url, selector, depth } = req.body;
	// Логика парсинга
	res.json({ message: "Parsing route", url, selector, depth });
});

module.exports = router;
