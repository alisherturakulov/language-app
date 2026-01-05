//routing for hosting the app; using nodejs

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // const url = req.url;
    // console.log('received request:' + req.url);
    
    // //routing for urls
    // if(url === "/" || url === "/index.html"){
    //     res.writeHead(200, {'Content-Type':'text/html'});
    //     fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    //     //res.end();
    // }else if(url==='/reading' || url === '/reading.html'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     fs.createReadStream(path.join(__dirname, 'reading.html')).pipe(res);
    //     res.end();
    // }else if(url ==='/conversation' || url === 'conversation.html'){
    //     res.writeHead(200, {'Content-Type':'text/html'});
    //     fs.createReadStream(path.join(__dirname, 'conversation.html')).pipe(res);
    // }
    let filePath = '.'+req.url;
    if(filePath === './'){
        filePath = './index.html';
    }

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch(extName){
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        
    }

    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err === 'ENOENT'){
                res.writeHead(404, 'text/plain');
                res.end('error 404', 'utf-8');
            }else{
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        }else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    });

});


server.listen(PORT, '127.0.0.1', () =>{
    console.log('Server listening on: http://localhost:3000');
});