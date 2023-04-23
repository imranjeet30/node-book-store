const http = require('http');
const fs = require('fs');
const PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        fs.readFile('./pages/home.html', 'utf8', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'});
        fs.readFile('./pages/about.html', 'utf8', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else{
        res.writeHead(200, {'content-type':'text/html'});
        fs.readFile('./pages/404.html', 'utf8', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        }) 
    }
    
});
console.log('hey')
server.listen(PORT);