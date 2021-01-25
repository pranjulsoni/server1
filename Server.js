const express = require('express')
var app = express()
const bodyparser=require('body-parser')
var axios = require('axios')
app.use(bodyparser.json())
console.log(process.env);
app.get('/',async function (req,res) {
    console.log("we are at login");
  var result= await  axios.post("http://server2-env.eba-ja9kqybp.us-east-2.elasticbeanstalk.com/logout",{data:"deata"} )

  res.send(result.data)
    
})
const PORT=process.env.PORT || 8080

app.listen(PORT,console.log("server-----1 is running"))