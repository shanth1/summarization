const express = require("express");
const router = express.Router();

// Пример маршрута для работы с файлами
router.post("/", (req, res) => {
	const { file } = req.body;
	// Логика обработки файлов
	res.json({ message: "Files route", file });
});

module.exports = router;
