const mongoose = require('mongoose')
const validator = require('validator')

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

// THE TASK MAKER

// const task = new Task({
//     description:"Read a book",
//     creator: "Mike",
//     priority: 1,
//     completed: true,
// })

// task.save().then(() =>{
//         console.log(task)
//     }).catch((error) => {
//         console.log(error)
// })


module.exports = Task
