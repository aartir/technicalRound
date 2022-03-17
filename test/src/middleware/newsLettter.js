
const checkNewsLetter= (req, res, next) => {
    req.on('data', (chunk)=>{
        let str = chunk.toString();
        console.log(str);
        if(str.includes('newsletter=false')){
            console.log("demo");
            next()
        }
        else{
            res.sendStatus(404,"You have not Subscribe for Newslatter");
        }
    })
}

module.exports = checkNewsLetter;