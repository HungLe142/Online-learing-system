import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());

//Khai báo các route
import adminRoute from './routes/AdminRoute.js';
import lecturerRoute from './routes/LecturerRoute.js';
import studentRoute from './routes/StudentRoute.js';
import classRoute from './routes/ClassRoute.js';
import userRoute from './routes/UserRoute.js';

//Dẫn qua các route
app.use('/admin', adminRoute);
app.use('/lecturer', lecturerRoute);
app.use('/student', studentRoute);
app.use('/class', classRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});