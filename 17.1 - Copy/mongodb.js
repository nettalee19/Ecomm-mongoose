
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL ='mongodb://127.0.0.1:27017'
//const databaseName ='task-manager'
const databaseName ='task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) =>{
    if(error){
        return console.log("Unable to connect to database")
    }

    //console.log("Connected correctly")

    const db = client.db(databaseName)

    // db.collection('rest').insertOne({
        
        

    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })



    // db.collection('rest').insertMany(
        
    
           
    // ), ((error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert user')
    //         }
    //         console.log(result.ops)
    //     })



})