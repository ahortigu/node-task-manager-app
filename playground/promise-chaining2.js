// const doWork = async () => {
//     throw new Error('Something went wrong')
//     return 'Ana'
// }
// doWork().then((result) => {
//     console.log('result', result)
// }).catch((e) => {
//     console.log('e', e)

// })
require('../src/db/mongoose.js')
const Task = require('../src/models/tasks')

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5e2ec95960cc8a271c46f545').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})