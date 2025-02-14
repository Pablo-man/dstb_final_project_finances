import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express"
import indexRoutes from "./src/routes/user.routes.js";
import "./src/utils/mongoose.js"
import specs from "./src/swagger/swagger.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();

// settings
var corsOptions = {
    origin: 'http://54.166.71.68:80',
    optionsSuccessStatus: 200,
    credentials: true
  }

// middlewares
app.use(morgan("dev"));
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

// routes
app.use(indexRoutes);

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;