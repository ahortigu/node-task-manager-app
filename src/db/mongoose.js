const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task',{
    description:{
        type: String,
        required: true,
        trim: true,
    },
    creator:{
        type: String,
        required: true 
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
        validate(value){
            if(value.toLowerCase.inclues('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    priority:{
        type: Array,
        required: false,
        values: [1,2,3,4],
    },
    completed:{
        type: Boolean,
        required: true
    }
 })

const task = new Task({
 
})
task.save().then(() =>{
        console.log(task)
    }).catch((error) => {
        console.log(error)
})
