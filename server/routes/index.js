const express = require("express");
const adminRouter = require("./adminRoute");
const studentRouter = require("./studentRoute");
const userRouter = require("./userRoute");


const routes = (app) => {

app.use("/api/admin", adminRouter);
app.use('/profile', userRouter);
app.use('/student', studentRouter);

};

module.exports = routes;
