const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const parsingRoutes = require("./routes/parsing");
const filesRoutes = require("./routes/files");
const collectionRoutes = require("./routes/collection");
const queryRoutes = require("./routes/query");
const authRoutes = require("./routes/auth");

app.use("/api/parsing", parsingRoutes);
app.use("/api/files", filesRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/query", queryRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
