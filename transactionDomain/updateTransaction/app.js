import express from "express";
import morgan from "morgan";
//import swaggerUI from "swagger-ui-express"
import {graphqlHTTP} from 'express-graphql'
import schema from './src/graphQL/schema.js'
import "./src/utils/mongoose.js"

const app = express();

// settings
app.set("port", process.env.PORT || 5003);
app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))


// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.listen(app.get("port"),()=>{
    console.log(`server on port ${app.get("port")}`)
})

export default app;