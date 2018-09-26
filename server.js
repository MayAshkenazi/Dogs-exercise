var express = require('express');
var app = express();
app.listen(8000);

app.use(express.static('public'));
app.use(express.static('node_modules'));

var data = [{ name: "Rexy", age: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtfcdi66R0-yYy7ulFw60vBtzXCq54UTJsEPUwSQ3YsKI9HuO" },{ name: "mongo", age: 7, image: "https://img.cutenesscdn.com/640/clsd/getty/727ffd5be90b4700955f5cd94a277ae0"},{ name: "Lasi", age: 3, image: "https://cdn.pixabay.com/photo/2015/07/31/11/43/dog-869030__340.jpg"}];

app.get('/dogs', function(req, res){
    if(req){
      res.send(data)
    } else{
      res.send({error: "Sorry!"});
    }
  });