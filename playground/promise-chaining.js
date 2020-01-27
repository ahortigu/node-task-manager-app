require('../src/db/mongoose.js')
const Task = require('../src/models/tasks')
const User = require('../src/models/users')

// Task.findByIdAndUpdate('5e2ec9c2c68a152bfcc9aeef',{}).then(task)


User.findByIdAndUpdate('5e2b192cc3831451704699f1', {age: 61}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 61})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

