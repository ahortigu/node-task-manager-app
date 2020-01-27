const express = require('express')
require('./db/mongoose')
const User = require('./models/users')
const Task = require('./models/tasks')


const app = express()
const port = process.env.PORT || 3000

// It grab incoming data into JSON
app.use(express.json())


app.post('/users',(req,res) => {
        const user = new User(req.body)
        user.save().then(() => {
        res.status(201).send(user)
        }).catch((e) => {
            res.status(400).send(e)
        })
}) 

app.get('/users', (req, res) => {
    User.find({}).then((users) =>{
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})




app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send(
                console.log( _id +' not found in database')
            )
        }
      res.send(user)
           console.log(user +' has been added to the database.')
    }).catch((e) => {
        res.status(500).send(
            console.log('This is a server error ')
        )
    })
})
   


app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send(
                console.log( _id +' not found in database')
            )
        }
      res.send(task)
           console.log(task +' has been added to the database.')
    }).catch((e) => {
        res.status(500).send(
            console.log('This is a server error ')
        )
    })
})


app.post('/tasks',(req,res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.get('/tasks', (req, res) => {
    User.find({}).then((tasks) =>{
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send(e)
    })
})





app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})