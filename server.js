const express = require("express");
const app = express();
require("dotenv").config({path:"./config/.env"});
const User=require('./Models/userModels')
//Routes
//app.use('/user', require('./routes/userRouter'))

const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then((res) => console.log('database connected')).catch((err)=> console.log(err))

//Create and Save a Record of a Model
/* const newuser= new User({
    name:'john',
    email: 'hdhhd@gmail.com',
    password: 974569,
    age: 45,
    favoriteFoods: ['cake']
})
newuser.save().then(user=>console.log(user)).catch(err=>console.error(err)) */

//Create Many Records with model.create()
/* User.create([{
    name:'amal',
    email: 'amald@gmail.com',
    password: 99,
    age: 25,
    favoriteFoods: ['cake','lemon']
},
{
    name:'john',
    email: 'hhd@gmail.com',
    password: 4569,
    favoriteFoods: ['choclat']
},
{
    name:'lala',
    email: 'lala@gmail.com',
    password: 1234,
    favoriteFoods: ['bread']
},
{
    name:'Po',
    email: 'po@gmail.com',
    password: 7894,
    favoriteFoods: ['bonbon']
}

]).then(users=>console.log(users))  */

//Use model.find() to Search Your Database
//User.find().then(result=>console.log(result)).catch(err=>console.log(err))

//Use model.findOne() to Return a Single Matching Document from Your Database
//User.findOne({favoriteFoods:'cake'}).then(result=>console.log(result)).catch(err=>console.log(err))

//Use model.findById() to Search Your Database By _id
//User.findById('60fa9f982d08950ee401ce93').then(result=>console.log(result)).catch(err=>console.log(err))

//Perform Classic Updates by Running Find, Edit, then Save
/* User.findOne({name:'Po'}).then(result=>{
   result.name='po'
   result.save().then(user=>console.log(user))
})
    .catch(err=>console.log(err))  */

//Perform New Updates on a Document Using model.findOneAndUpdate()
//User.findOneAndUpdate({name:'john'}, {age:55}).then(result=>console.log(result))

//Delete One Document Using model.findByIdAndRemove

//User.findByIdAndDelete('60faa2274a7be71224ddf0f8').then(result=>console.log(result))

//MongoDB and Mongoose - Delete Many Documents with model.remove()
//User.remove({name:'rami'}).then(result=>console.log(result))

//Chain Search Query Helpers to Narrow Search Results
User.find({}).sort({name:-1}).limit(2).select({password:0, email:0}).exec((err,data) => console.log(data))



const PORT = process.env.PORT || 5000;
app.listen(PORT,(err)=> err ? console.log(err) : console.log('server is running on port', PORT))