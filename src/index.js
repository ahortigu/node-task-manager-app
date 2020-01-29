const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const router = new express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const app = express()
const Task = require('./models/task')
const User = require('./models/user')



// next relates to a middleware function.
// app.use((req,res,next)=>{
   
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')

//     } else {
//         next()

//     }
// })


// app.use((req,res,next)=>{
//    res.status(503).send('This website is under maintainance')
// })


// It grabs incoming data into JSON
app.use(express.json())
app.use(router)
app.use(userRouter)
app.use(taskRouter)


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})

const main = async() => {
    const user = await User.findById('5e31b7e78aeb59558ca1bc71')
    await user.populate('tasks').execPopulate()
    //user.tasks refers to the task array which is VIRTUAL
    console.log(user.tasks)
}

main()
