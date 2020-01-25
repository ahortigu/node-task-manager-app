//CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')
//Gives access to the function necessary to connect the database.

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if(error){
        return console.log('Unable to connect to database')
    }

const db = client.db(databaseName)

db.collection('tasks').insertMany([{
        description: 'Clean the house',
        completed: true

        },{
            description: 'Call dentist',
            completed: false

       },{
        description: 'Do grosery',
        completed: false
    
        }], (error, result) => {
            if(error){
                     return console.log('Unable to insert tasks')
            }
            console.log(result.ops)
    })
})



