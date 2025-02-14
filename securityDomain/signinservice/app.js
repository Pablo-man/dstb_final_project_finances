import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./src/routes/login.routes.js";
import "./src/utils/mongoose.js"

const app = express();

// settings
app.set("port", process.env.PORT || 4001);
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, `http://localhost:5173`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    res.header(`Access-Control-Allow-Credentials`, `true`);
    next()
})

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(router)

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;