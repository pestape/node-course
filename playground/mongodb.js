// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);
//console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'gui',
    //     age: 26
    // }, (error, result) =>{
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     } 

    //     console.log(result.ops);

    // })


    // db.collection('users').insertMany([
    //     {
    //         name: 'lucas',
    //         age: 28
    //     }, {
    //         name: 'joao',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         dscription: 'Finish the nodejs course',
    //         completed: false
    //     },{
    //         dscription: 'Clean the house',
    //         completed: true
    //     },{
    //         dscription: 'Play csgo',
    //         completed: false
    //     }
    // ], (error, result) =>{
    //     if (error) {
    //         return console.log('Unable to insert tasks');
    //     }

    //     console.log(result.ops);

    // })

    // db.collection('users').findOne({name: 'lucas'}, (error, user) =>{
    //     if (error) {
    //         return console.log('Unable to connect database');         
    //     }

    //     console.log(user);
    // })


    // db.collection('users').find({age: 30}).toArray((error, users) =>{
    //     if (error) {
    //         return console.log('Unable to connect database');      
    //     }

    //     console.log(users); 
    // })


    // db.collection('users').find({age: 30}).count((error, count) =>{
    //     if (error) {
    //         return console.log('Unable to connect database');      
    //     }

    //     console.log(count); 
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5ce91d493b1b2115abbd050e") }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to connect database');
    //     }

    //     console.log(task);
    // })


    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to connect database');
    //     }

    //     console.log(tasks);
    // })


    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ce853d593ef7f144e2479dd")
    // }, {
    //         // $set: {
    //         //     name: 'mike'
    //         // }

    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error);
    //     })


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error);
    //     })

    // db.collection('users').deleteMany({
    //     age: 31
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        _id: new ObjectID("5ce91d493b1b2115abbd050e")
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

})