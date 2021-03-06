const api = require("./api");
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", api);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
