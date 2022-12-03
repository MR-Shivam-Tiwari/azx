const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shivam:ft12shivam12@cluster0.p7keptk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected with contact collection")
})
.catch(e=>console.log(e))

const schema= mongoose.Schema

const userSchema = new schema({
        userEmail:{type:String},
        name:{type:String,},
        designation:{type:String},
        company:{type:String},
        industry:{type:String},
        email:{type:String,},
        phone:{type:Number,},
        country:{type:String},
        userRef:{type:String}
})
 const ContactDetails = mongoose.model("contacts_details",userSchema)
 module.exports=ContactDetails