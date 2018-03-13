var express = require('express');
var path = require('path');
var mongoose = require('mongoose')

var app = express();
mongoose.connect('mongodb://localhost/basic-mern-boilerplate')

const PORT = process.env.PORT || 3000;

//Server our static assets
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('/api', (req, res) => {
  console.log("test")
  res.send("You hit the api endpoint")
})

app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'client', 'build'));
});

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}!`)
})
module.export = app;
