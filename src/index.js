const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const router = new express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Task = require('./models/task')
const User = require('./models/user')

// const multer = require('multer')
// const upload = multer({
//     dest:'images'
// })

// app.post('/upload', upload.single('upload'),(req, res) =>{
//     res.send()
// })

// next relates to a middleware function.






// It grabs incoming data into JSON
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})

const main = async() => {
    
    const user = await User.findById('5e32ad0c30624830fc4b9662')
    await user.populate('tasks').execPopulate()
    //user.tasks refers to the task array which is VIRTUAL
    console.log(user.tasks)
}

main()

