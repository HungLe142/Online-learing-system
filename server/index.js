const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const userRoutes = require('./routes/userRoute');

app.use(cors());

app.use('/profile', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


