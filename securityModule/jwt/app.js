import express from "express";
import morgan from "morgan";
import router from "./src/routes/jwt.routes.js";

const app = express();

// settings
app.set("port", process.env.PORT || 4002);
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(router)

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;