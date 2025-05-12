const express=require('express');
const app=express();
app.use(express.json())
const PORT=5083

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
});

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.post('/',(req,res)=>{
  const {username,email,password,DOB}=req.body;
  if(!username){
   return  res.status(400).json({message:'Username cannot be empty'})
  }
  if(!email){
    return res.status(400).json({message:'Email cannot be empty'})
  }
  if(password.length<8 || password.length>16){
   return  res.status(400).json({message:'Password length should be greater than 8 or less than or equal to 16'})
  }
  return res.status(200).json({message:'All feilds are filled'})
})