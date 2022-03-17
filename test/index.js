const express = require('express')
const app = express();
const checkNewsLetter = require('./src/middleware/newsLettter')
app.use(checkNewsLetter);
app.post('/signup', async (req, res) =>{
    let body = {};
    await req.on('data', chunk => {
        let d = chunk.toString().split('&');
        d.map(a=>{
            let c= a.split('=');
            body[c[0]] = c[1];
        })
    });
    if(body && body.name && body.lname && body.password && body.email && body.phoneNumber){
            if(body.name === 'abc' && body.lname === 'xyz' && body.email === 'abc%40gmail.com' && body.password === "test%40123"){
                res.status(200);
                res.send('You have successfully logged in')
            } else {
                res.sendStatus(404,'Incorrect credentials')
            }
    } else {
                res.sendStatus(404,'Values are missing')
    }   
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/view/index.html");
})

app.listen(3000);