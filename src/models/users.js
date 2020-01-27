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
    age:{
        type: Number,
        required: true,
        }
 })


 // THE USER MAKER

//  const user = new User({
//     name: 'Juana',
//     email: "juana.afe@gmail.com",
//     password:"jdcs23s",
//     age: "26"
// })

// user.save().then(() =>{
//         console.log(user)
//     }).catch((error) => {
//         console.log("User Error. Cause; " + error)
// })

module.exports = User
