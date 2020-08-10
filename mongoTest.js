const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    if (err) {
        return new Error('failed to connect');
    }

    console.log("Connected to the server");

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.find().toArray((err, docs) => {
        if (err) return new Error('error looking for docs');

        console.log(docs);
    })

    collection.insertOne({
        "name": "Another Pizza",
        "description": "test 2"
    }, (err, result) => {
        if (err) return new Error('Error inserting into collection');

        console.log('After Insert');
        console.log(result.ops);

        db.dropCollection('dishes');

        client.close();
    })

})