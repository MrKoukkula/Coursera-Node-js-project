exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        if (err) return new Error('inserting failed');
        console.log('Inserted document');
        callback(result);
    })
}

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find().toArray((err, docs) => {
        if (err) return new Error('finding failed');
        callback(docs);
    })
}

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        if (err) return new Error('deleting failed');
        console.log('deleted document');
        callback(result);
    })
}

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        if (err) return new Error('updating failed');
        console.log('updated document');
        callback(result);
    })
}