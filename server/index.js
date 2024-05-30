const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const parsingRoutes = require("./routes/parsing");
const filesRoutes = require("./routes/files");
const collectionRoutes = require("./routes/collection");
const queryRoutes = require("./routes/query");

app.use("/api/parsing", parsingRoutes);
app.use("/api/files", filesRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/query", queryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
