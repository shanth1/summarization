const express = require("express");
const router = express.Router();

// Пример маршрута для обработки запросов
router.post("/", (req, res) => {
	const { query } = req.body;
	// Логика обработки запроса
	res.json({ message: "Query route", query });
});

module.exports = router;
