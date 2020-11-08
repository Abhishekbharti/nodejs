const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Welcome to Node.js Application</p>');
    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})