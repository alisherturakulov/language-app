//routing for hosting the app; using nodejs

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log('received request:' + req.url);
    
    if(url === "/" || url === "/home"){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
        
    }/*else if(url==='/conversation'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, 'reading.html'), 'utf-8').pipe(res);
    }*/

});


server.listen(3000, '127.0.0.1', () =>{
    console.log('Server listening on: http://localhost:3000');
});