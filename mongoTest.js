const MongoClient = require('mongodb').MongoClient;
const dboper = require('./operations');

const url = "mongodb://localhost:27017";
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    if (err) {
        return new Error('failed to connect');
    }

    console.log("Connected to the server");

    const db = client.db(dbname);
    
    dboper.insertDocument(db, {name: "pizza", description: "Tasty pizza"}, "dishes", (result) => {
        console.log('inserted file');

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log(docs);

            db.dropCollection('dishes', (result) => {
                console.log('shut down');

                client.close();
            })
        })
    })

    

})