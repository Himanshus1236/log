
const http = require('http');
const server = http.createServer((req,res)=> {
  res.end('hello world');
});
// server listner
server.listen(3000 , () => {
  console.log('listening the port 3000..')
});