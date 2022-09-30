const express  = require('express')
const cors =require('cors')

const app = express()
app.use(cors())


const port = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send('Hello World')
}).post('/webhook',async (req,res)=>{
    console.log(req.body)
    res.status(200).sned('OK')
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
