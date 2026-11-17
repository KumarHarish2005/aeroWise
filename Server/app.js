import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//Routers
import userRouter from "./routes/user.route.js";

const app = express();

// Middleware
app.use(cors({
    origin: "process.env.CLIENT_URL",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));


//Health Check Route
app.get("/api/v1/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});

//apis
app.use("/api/v1/user",userRouter);



export default app;