import express from 'express'
import fileUpload from 'express-fileupload'
import router from './src/routes/upload.routes.js'

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

const PORT = process.env.PORT || 5000

app.use('/upload', router)

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})