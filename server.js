const express = require("express");
const app = express();

const taskROuter = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const mongoose = require("mongoose");
mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Successfully connexted to MongoDB");
})
.catch((e) => {
    console.log("Error trying to connect MOngoDB", e);
})
app.use(express.json());
app.get("/", (req, res) =>{
    res.send("<h1>Hello  s using Express now sync...</h1>")
});
app.use("/api/v1/tasks", taskRouter);
app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>{
    console.log(`server started on ${PORT}`)
});