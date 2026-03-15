const express = require("express")

const app = express()

app.use(express.json())

let trackerData=[]

app.post("/tracker",(req,res)=>{

trackerData.push(req.body)

res.send("Saved")

})

app.get("/tracker",(req,res)=>{

res.json(trackerData)

})

app.listen(3000,()=>{

console.log("LifeOS server running")

})
