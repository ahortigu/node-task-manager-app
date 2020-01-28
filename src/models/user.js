const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
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
// }))


// pre/post an event happens and it has to be a normal function because arrow function don't work with this.
// statics allows to access any  from the Schema directly. 
userSchema.statics.findByCredential = async (email, password) =>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user
}


// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this
 
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
