const express =require('express')
let app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.send("runnnin fine")
})

app.listen(3000,()=>{
  console.log("its working! at localhost:3000/")
})