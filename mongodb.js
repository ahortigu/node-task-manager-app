//CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')
//Gives access to the function necessary to connect the database.

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// It creates an ID (5e29a50e3486320874fa827d)
//const id = mongodb.ObjectID

const id = new ObjectID()

// To buffer/binary
console.log(id.id.length)

//Back to string
console.log(id.toHexString().length)

// // To buffer/binary
// console.log(id.id.length)

// //Back to string
// console.log(id.toHexString().length)

// // getTimestamp access the time in which the id was created. Please note that this is embedded in the first 4 caracteres of the id itself. ie:   5e29a7b224a18b0bd4b33adf 2020-01-23T14:03:30.000Z
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if(error){
        return console.log('Unable to connect to database')
    }
const db = client.db(databaseName)


    const updatePromise = db.collection('Users').updateOne({
        _id: new ObjectID("5e298ac91dfe87288018f84c")
    },{
        $set: {
            name: 'Juanito'
        }
    })
    updatePromise.then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)

    })
})









    // db.collection('users').findOne({_id:new ObjectID("5e29aced74d406471c385add")}, (error, user) =>{
    //     if(error){
    //        return console.log('Unable to fetch')
    // }
    //     console.log(user)  
    // })

    // db.collection('tasks').findOne({_id:new ObjectID("5e29a1084f4857454c67cdad") }, (error, user) =>{
    //     if(error){
    //        return console.log(task)
    // }
    //     console.log(user)  
    // })

    //  db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //      console.log(tasks)
    // })
 
    // .find returns a cursor!!! So if I want a array I have to use the method toArray, for instance. 
//     db.collection('users').find({age:27}).toArray((error, users) => {
//     console.log(users)
//     })
//     db.collection('users').find({age:28}).count((error, count) => {
//         console.log(count)
//    })
// })
    //  db.collection('users').insertOne({
    //             name: 'Dorina',
    //             age: 26
    //  }, (error, result) => {
    //      if(error){
    //          return console.log('Unable to insert user')

    //      }
    //      console.log(result.ops)
    //  })





    

    // const updatePromise = db.collection('Users').updateOne({
    //     _id: new ObjectID("5e298ac91dfe87288018f84c")
    // },{
    //     $inc:{
    //         age: 10
    //     }
    //     // $set: {
    //     //     name: 'Juanito'
    //     // }
    // })
    // updatePromise.then((result) =>{
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)

    // })



    // db.collection('users').findOne({_id:new ObjectID("5e29aced74d406471c385add")}, (error, user) =>{
    //     if(error){
    //        return console.log('Unable to fetch')
    // }
    //     console.log(user)  
    // })



    // db.collection('tasks').findOne({_id:new ObjectID("5e29a1084f4857454c67cdad") }, (error, user) =>{
    //     if(error){
    //        return console.log(task)
    // }
    //     console.log(user)  
    // })




    //  db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //      console.log(tasks)
    // })
    // .find returns a cursor!!! So if I want a array I have to use the method toArray, for instance. 
    // db.collection('users').find({age:27}).toArray((error, users) => {
    // console.log(users)
    // })




    //  db.collection('users').insertOne({
    //             name: 'Dorina',
    //             age: 26
    //  }, (error, result) => {
    //      if(error){
    //          return console.log('Unable to insert user')

    //      }
    //      console.log(result.ops)
    //  })



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


