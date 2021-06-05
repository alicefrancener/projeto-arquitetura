const http = require('http');

const PORT = 3001;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end("response from server - 1.\n");
});

server.listen(PORT, HOST, () => {
    console.log('running on http://localhost:3001/');
});