const express = require("express");
const router = express.Router();

// Пример маршрута для работы с коллекцией
router.get("/", (req, res) => {
	// Логика получения коллекции
	res.json({ message: "Collection route" });
});

module.exports = router;
