const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send("Hello its Swapna...")
})

app.get('/customized', function(req, res){
let custome = { 
    name : "Swapna",
    age : 22
}
res.send(custome)
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
});