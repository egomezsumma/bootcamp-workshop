var fs   = require('fs');
var file = __dirname + '/hello.txt';

var content = fs.readFileSync(file).toString();

console.log(content);


//reading asynchronous
//
// fs.readFile(file, function (err, content) {
//   console.log(content.toString());
// });


// using streams
// 
// fs.createReadStream(file)
//   .pipe(process.stdout);

