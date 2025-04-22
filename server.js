const http = require('http');

const port = 3000;  

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Welcome to my first node js server!');
});

myServer.listen(port, () => {
    console.log(`Server now loading in: http://localhost:${port}`);
});