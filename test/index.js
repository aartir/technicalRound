const express = require('express')
const app = express();
app.use(checkNewsLetter());

app.get('/signup', (req,res) =>{

    const body = req.body;
    if(body.firstName && body.lName && body.password && body.email){
            if(body.firstName === 'abc' && body.lname === 'xyz' && body.email === 'abc@gmail.com' && body.password === "test@123"){
                res.send(200, 'You have successfully logged in')
            } else {
                throw new Error('Incorrect credentials')
            }
    } else {
                throw new Error('Values are missing')
    }   

});

app.listen(3000)



const checkNewsLetter= (req,res, next) => {
    if(req.body.newsLatterFlag === true)
    {
        next()
    } else {
        throw new Error("You have not Subscribe for Newslatter")
    }
}