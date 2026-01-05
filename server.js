//routing for hosting the app; using nodejs

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log('received request:' + req.url);
    
    //routing for urls
    if(url === "/" || url === "/index.html"){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
        //res.end();
    }else if(url==='/reading' || url === '/reading.html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(path.join(__dirname, 'reading.html')).pipe(res);
        res.end();
    }else if(url ==='/conversation' || url === 'conversation.html'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(path.join(__dirname, 'conversation.html')).pipe(res);
    }

});


server.listen(3000, '127.0.0.1', () =>{
    console.log('Server listening on: http://localhost:3000');
});