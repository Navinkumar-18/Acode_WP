const express=require('express');
const mongoose=require('mongoose');

const app=express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/persondb');

const UserSchema = new mongoose.Schema(
    {
        name:String,
        age:Number
    }
);
const User=mongoose.model('User',UserSchema);

app.post('/add',async(req,res)=>{
    const user=new User(req.body);
    await user.save();
    res.end("Inserted");
});

app.get('/view',async(req,res)=>{
    const users=await User.find();
    res.json(users);
});

app.put('/update/:id',async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,req.body);
    res.end("Updated");
})

app.delete('/delete/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.end("Deleted");
})
app.get('/',(req,res)=>{
    res.end("Welcome to  MongoDb CRUD App");
})
app.listen(3000,()=>{
    console.log("server running ");
})