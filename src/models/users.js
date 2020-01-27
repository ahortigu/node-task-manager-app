const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        // validate(value){
        //     if(value.toLowerCase.includes('password')){
        //         throw new Error('Password cannot contain "password"')
        //     }
        // }
    },
 })


 // THE USER MAKER

 // const user = new User({
//     name: 'Laura',
//     email: "laura.afe@gmail.com",
//     password:"jmos23s",
// })

// user.save().then(() =>{
//         console.log(user)
//     }).catch((error) => {
//         console.log("User Error. Cause; " + error)
// })

module.exports = User
