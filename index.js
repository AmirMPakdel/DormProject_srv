const app = require('express')();
const bodyParser = require('body-parser');
const ServerConsts = require('./consts/ServerConsts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req,res)=>{

  let json = {"test":'Get Request Succeed!!!'};

  res.send(json);
})

app.post('/', (req,res)=>{

    console.log("Post recived :" +JSON.stringify(req.body));

    let json = {"test":'Post Request Succeed!!!'};

    res.send(json);
})

app.listen(ServerConsts.Port, ()=>{

    console.log("Listenning on Port : "+ ServerConsts.Port);
});