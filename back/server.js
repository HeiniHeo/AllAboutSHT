const express = require('express')
const bodyParser = require('body-parser')
// npm install body-parser
const app = express()
const db = require('./models')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false,}))

db.sequelize.sync({focus:false}) // promise object
.then(()=>{
    console.log('DB 접속 성공');
})
.catch( error=>{
    console.log(`DB 접속 실패 : ${error} `)
})

app.use('/api',routes)

app.get('/',(req,res)=>{
    res.send('hello aws!')
})

app.listen(80,()=>{
    console.log('start server port 3000')    
})

