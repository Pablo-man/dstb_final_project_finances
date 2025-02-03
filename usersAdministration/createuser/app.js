import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express"

import indexRoutes from "./src/routes/user.routes.js";
import "./src/utils/mongoose.js"
import specs from "./src/swagger/swagger.js";

const app = express();

// settings
app.set("port", process.env.PORT || 4001);
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, [`http://localhost:5173`]);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    res.header(`Access-Control-Allow-Credentials`, `true`);
    next()
})

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// routes
app.use(indexRoutes);

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;