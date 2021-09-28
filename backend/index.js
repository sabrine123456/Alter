import express from 'express';
import  mongoose from 'mongoose';
import { User }  from './models/User.js';
import bodyParser from 'body-parser';

var app = express();

var db = mongoose.connect('mongodb://localhost:27017/meanAuthAngular', function(err,response){
    if(err) console.log("there is error mongodb");
    console.log('connect has been added');
});

app.set('port', process.env.prot || 3001);
app.use(bodyParser.json());
app.get('/', (req,res) => {

 })

 app.get('/register', (req,res) => {
     console.log(req.body);
  var firstname= req.body.firstname;
  var lastname= req.body.lastname;
  var email= req.body.email;
  var password= req.body.password;

   var user = new User();
  user.firstname=firstname;
  user.lastname=lastname;
  user.email=email;
  user.password=password;
})

app.listen(app.get('port'), function(err,response){
    console.log('serveur running ',app.get('port'));
})