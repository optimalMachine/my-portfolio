const express = require('express');
const app = express();
port = 8080;


app.listen(process.env.PORT || port,()=>{
    console.log(`listening to ${port}`);
    
})

//require to load images.
app.use(express.static(__dirname+'/'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})