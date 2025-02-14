import express from "express";
import morgan from "morgan";
//import swaggerUI from "swagger-ui-express"
import {graphqlHTTP} from 'express-graphql'
import schema from './src/graphQL/schema.js'
import "./src/utils/mongoose.js"
import cors from 'cors'
import {auth} from './src/middleware/user.middleware.js'
import cookieParser from 'cookie-parser'

const app = express();

var corsOptions = {
  origin: 'http://54.166.71.68',
  optionsSuccessStatus: 200,
  credentials: true
}
// settings
app.set("port", process.env.PORT || 5001);
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(auth)
// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/graphql',
  graphqlHTTP((req) => ({
    schema,
    graphiql:true,
    context: {user: req.user}
})))

//app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})