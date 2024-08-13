const express = require('express');
const app = express();


app.use('/',function(req,res){
 return res.send("Welcome in express server !");
});


app.listen(3001,function(){
    console.log("Express server start successfully on port 3001");
})
