const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');


// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
   
}, {collection: 'Users'});


userSchema.pre('save' , async function (next){
    const salt =  bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)

})

userSchema.methods.isPasswordMatched= async(enteredPassword) =>{
    return  bcrypt.compareSync(enteredPassword, this.password)
}


module.exports = mongoose.model('User', userSchema);