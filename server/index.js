const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const userRoutes = require('./routes/userRoute');
const studentRoutes = require('./routes/studentRoute');

app.use(cors());

app.use('/profile', userRoutes);
app.use('/student', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;


