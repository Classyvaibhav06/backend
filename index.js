import express from 'express';
const app =express();

// app.use((req,res,next)=>{
//   console.log("middleware is activated")
//   next();
// })

app.set("view engine","ejs");

app.get('/',(req,res)=>{
  res.render("index")
})

//dynamic route

app.get('/user/:username',(req,res)=>{
  res.send(`this is a route for ${req.params.username}`)
});

app.listen(3001);