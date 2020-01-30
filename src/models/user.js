const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

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
    },

    avatar:{
        type:Buffer
    },
    // Array of tokens
    tokens: [{
        token:{
            type: String,
            required: true 
        }
    }],
 }, {
     timestamps: true
 })





 // Instead of storing all the tasks as an array in the user model therefore in MongoDb a virtual property is created.
 userSchema.virtual('tasks', {
     ref: 'Task',
     // Lirally the real and local field.
     localField:'_id',
     // The reference of the relationship we want to create.
     foreignField:'owner'
 })


userSchema.methods.toJSON = function () {
    const user = this
    //  ToObjects returns raw data
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete.userObject.avatar

    return userObject
}

// pre/post an event happens and it has to be a normal function because arrow function don't work with this.
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisistopsecret')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

// statics are accesible in the models instancesallows to access any  from the Schema directly. 

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
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



userSchema.pre('remove', async function(next) {
    const user = this
    await Task.deleteMany({ owner:user._id })
    next()
})


const User = mongoose.model('User', userSchema)

module.exports = User
