const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const router = new express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000

// It grabs incoming data into JSON
app.use(express.json())
app.use(router)
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})



const myFunction = async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisistopsecret', {expiresIn: '4 hours'})
    console.log(token)
    const data = jwt.verify(token,'thisistopsecret')
    console.log(data)
}

//     const password = 'floresRojas'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('floreRojas', hashedPassword)
//     console.log(isMatch)
// }

myFunction()
