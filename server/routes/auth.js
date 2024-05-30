const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const BOT_TOKEN = process.env.BOT_TOKEN;

function checkTelegramAuthorization(authData) {
	const checkHash = authData.hash;
	delete authData.hash;

	const dataCheckArr = [];
	for (const key in authData) {
		dataCheckArr.push(`${key}=${authData[key]}`);
	}
	dataCheckArr.sort();
	const dataCheckString = dataCheckArr.join("\n");

	const secretKey = crypto.createHash("sha256").update(BOT_TOKEN).digest();
	const hash = crypto
		.createHmac("sha256", secretKey)
		.update(dataCheckString)
		.digest("hex");

	if (hash !== checkHash) {
		throw new Error("Data is NOT from Telegram");
	}

	if (Date.now() / 1000 - authData.auth_date > 86400) {
		throw new Error("Data is outdated");
	}

	return authData;
}

function saveTelegramUserData(res, authData) {
	const authDataJson = JSON.stringify(authData);
	res.cookie("tg_user", authDataJson, {
		httpOnly: true,
		// secure: true,
		// sameSite: "None",
	});
}

router.get("/", (req, res) => {
	try {
		const authData = checkTelegramAuthorization(req.query);
		saveTelegramUserData(res, authData);
		return res.json({
			message: "ok",
			token: JSON.stringify(authData),
		});
	} catch (error) {
		res.status(400).send(error.message);
	}
});

module.exports = router;
