var getDb    = require('mongo-getdb');
var ObjectID = require('mongodb').ObjectID;
var docs     = module.exports;

docs.find = function (query, callback) {
  
  getDb(function (db) {
    db.collection('documents')
      .find({
        content: {
          $regex:   query,
          $options: 'i'
        }
      }, { limit: 10 })
      .toArray(callback);
  });

};


docs.createNew = function (callback) {

  getDb(function (db) {
    db.collection('documents').insert({
      content: 'NEW DOCUMENT'
    }, function (err, inserted) {
      if (err) return callback(err);
      var doc = inserted[0];
      callback(null, doc._id.toString());
    });
  
  });

};

docs.getById = function (id, callback) {
  getDb(function (db) {
    db.collection('documents')
      .findOne({_id: new ObjectID(id)}, callback);
  });
};

docs.save = function (id, doc, callback) {
  var change = {};

  if (doc.content){
    change.content = doc.content; 
  }

  if (doc.title) {
    change.title = doc.title;
  }
  
  getDb(function (db) {
    db.collection('documents').update({
      _id: new ObjectID(id)
    }, {
      $set: change
    }, callback);
  });
};