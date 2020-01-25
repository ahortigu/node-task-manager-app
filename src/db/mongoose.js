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
        validate(value){
            if (value === ''){
                return console.log('Please enter a task')
            }
            else{
                console.log('Excellent! You have added the following new task')
            }
        },
        trim: true
    },
    priority: {
        type: Array,
        required: false,

    },
    completed: {
        type: Boolean,
        required: true
    }
 })



const task = new Task({
    description: 'Go dacing',
    completed: false
})
task.save().then(() =>{
        console.log(task)
    }).catch((error) => {
        console.log(error)
})
