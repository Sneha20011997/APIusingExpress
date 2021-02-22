
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo http://%s:%s", host, port)
})


app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data); 
    });
})
