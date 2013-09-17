var http     = require('http');
var express  = require('express');
var app      = express();
var getDb    = require('mongo-getdb');
var ObjectID = require('mongodb').ObjectID;
var db;

getDb('mongodb://localhost/mymdocs', function (_db) {
  db = _db;
});

app.configure(function (){
  this.set("view engine", "jade");
  this.set("views", __dirname + "/views");
  this.use(express.static(__dirname + '/public'));
  this.use(express.bodyParser());
});

app.get('/', function (req, res) {
  res.render('home');
});

//create a new document and redirect to the edit page.  
app.get('/new', function (req, res) {
  db.collection('documents').insert({
    content: 'NEW DOCUMENT'
  }, function (err, inserted) {
    if (err) return res.send(500, err);
    var doc = inserted[0];
    res.redirect('/doc/' + doc._id.toString());
  });
});

//render the document
app.get('/doc/:id', function (req, res) {
  //COMPLETE!
});

http.createServer(app)
    .listen(8080, function () {
      console.log('listening on http://localhost:8080');
    });