//CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')
//Gives access to the function necessary to connect the database.

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// It creates an ID (5e29a50e3486320874fa827d)
//const id = mongodb.ObjectID

const id = new ObjectID()
console.log(id)

// getTimestamp access the time in which the id was created. Please note that this is embedded in the first 4 caracteres of the id itself. ie:   5e29a7b224a18b0bd4b33adf 2020-01-23T14:03:30.000Z
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if(error){
        console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name: 'Andrew',
//         age: 27
//     }, (error, result) => {
//         if(error){
//             return console.log('Unable to insert user')

//         }
//         console.log(result.ops)
//     })
// })

    // db.collection('users').insertMany([
    //     {
    //          name: 'Mike',
    //          age: 30

    //     },{
    //         name: 'Ana',
    //         age: 28

    //     }
    // ], (error, result) => {
    //     if(error){
    //       return console.log('Unable to insert documents')
    //     }
    // //ops it is an array of the documents that I am sending
    // console.log(result.ops)
    // })

//     db.collection('tasks').insertMany([
//         {
//              description: 'Clean the house',
//              completed: true

//         },{
//             description: 'Call dentist',
//             completed: false

//        }, {
//         description: 'Do grosery',
//         completed: false


    
//    }], (error, result) => {
//         if(error){
//           return console.log('Unable to insert tasks')
//         }
//     //ops it is an array of the documents that I am sending
//     console.log(result.ops)
//     })

})
