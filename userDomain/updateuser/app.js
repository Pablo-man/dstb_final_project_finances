import express from "express";
import morgan from "morgan";

import indexRoutes from "./src/routes/user.routes.js";
import "./src/utils/mongoose.js"

const app = express();

// settings
app.set("port", process.env.PORT || 3003);
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, ['*']);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(indexRoutes);

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;