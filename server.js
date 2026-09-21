let fs = require('fs')
let os = require('os')

let user = os.userInfo();
console.log(user)
console.log(user.username)


fs.appendFile('fileName.txt', "It is the content storage," +'\n' + 'hii ' + user.username + '\n', () => {
    console.log("It is a callback function")
})

