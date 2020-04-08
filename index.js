const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req,res)=>{
    res.status(200).send('hello world');
});

app.get('/error', (req,res)=>{
    res.status(500).send('une erreur est survenu :D');
});

http.listen(80, ()=>{
    console.log('serveur listening on 80');
})