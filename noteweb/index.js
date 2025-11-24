const express =require('express')
let app = express();
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,'public')))

app.get("/",(req,res)=>{
  res.render("index")
})
app.get("/about/:user",(req,res)=>{
  res.send(`hello,${req.params.user}!`)
})

app.listen(3000,()=>{
  console.log("its working! at localhost:3000/")
})