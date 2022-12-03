const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

mongoose.connect("mongodb+srv://shivam:ft12shivam12@cluster0.p7keptk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("sucessfully connected to user collection")
})
.catch(e=>console.log(e))

const schema= mongoose.Schema

const userSchema = new schema({
    userEmail:{type:String},
    password:{type:String}
})

 const UserDetails = mongoose.model("UserDetails",userSchema)
 module.exports=UserDetails

