const express = require('express');
const app = express()
const say = require('say')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json());

app.post("/talk",(req,res)=> {
    const text = req.body.message
    if(!text.trim()){
        return res.json({
            msg:'put something in input first'
        })
    }
    say.speak(text)
    res.json({"msg": "done"})
})

app.get('/',(req,res)=>{
    return res.json({
        msg: "running"
    })
})

app.listen(port,()=>{
    console.log('running at 3000')
})