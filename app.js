var express=require('express');
var app=express();
var mongoose=require('mongoose');
var Book=require('./models/bookModels');
var db = mongoose.connect('mongodb://localhost/restful_db');
var bodyParser=require('body-parser');

var port=process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter=require('./Routes/bookRoutes')(Book);




app.use('/api',bookRouter);

app.get('/', function(req,res){
    res.send('welcome my friends');
});

app.listen(port,function () {
   console.log('running on port ' + port);
});

