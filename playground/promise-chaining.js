require('../src/db/mongoose.js')
const Task = require('../src/models/tasks')
const User = require('../src/models/users')

// Task.findByIdAndUpdate('5e2ec9c2c68a152bfcc9aeef',{}).then(task)


// User.findOneAndUpdate('5e2eed30bbd06c3a28e28366', {age: 3000}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 100})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgentAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgentAndCount('5e2eed30bbd06c3a28e28366', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})