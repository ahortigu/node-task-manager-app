const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task',{
    description:{
        type: String,
        required: true,
        trim: true,
    },
    priority:{
        type: Array,
        required: false,
        values: [1,2,3,4],
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
          // This is coming from the User model/schema
        ref:'User'
    },
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
