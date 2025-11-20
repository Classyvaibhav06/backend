import express from 'express';
const app =express();

app.use((req,res,next)=>{
  console.log("middleware is activated")
  next();
})

app.get('/',(req,res)=>{
  res.send("hello vaibhav jii!")
})

app.get('/user',(req,res)=>{
  res.send("this is user route")
});
app.get("/user/vaibhav",(req,res)=>{
  res.send("this is vaibhav profile")
});
app.listen(3001);