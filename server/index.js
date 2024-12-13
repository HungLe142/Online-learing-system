const express = require('express');
const cors = require('cors');
const routes = require("./routes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


