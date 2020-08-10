exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        
    })
}

exports.findDocuments = (db, collection, callback) => {
    
}

exports.removeDocument = (db, document, collection, callback) => {
    
}

exports.updateDocument = (db, document, update, collection, callback) => {
    
}