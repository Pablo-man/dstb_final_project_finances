import express from "express";
import morgan from "morgan";
//import swaggerUI from "swagger-ui-express"
import {graphqlHTTP} from 'express-graphql'
import schema from './src/graphQL/schema.js'
import "./src/utils/mongoose.js"
import cors from 'cors'

const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    //credentials: true
  }
// settings
app.set("port", process.env.PORT || 5003);
app.use(cors(corsOptions))

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;