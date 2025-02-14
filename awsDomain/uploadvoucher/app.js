import express from 'express'
import fileUpload from 'express-fileupload'
import router from './src/routes/upload.routes.js'
import morgan from 'morgan'

const app = express()

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))

app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, ['*']);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})


app.use(express.static('images'))
app.use(morgan('dev'))

const PORT = process.env.PORT || 5005

app.use(router)

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})