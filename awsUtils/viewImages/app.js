import express from 'express'
import router from './src/routes/list.routes.js'

const app = express()

app.use((req, res, next)=>{
    res.header(`Access-Control-Allow-Origin`, ['*']);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next()
})

app.use(express.static('images'))

const PORT = process.env.PORT || 9000

app.use('/list', router)

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})