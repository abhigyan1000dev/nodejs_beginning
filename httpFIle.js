const http = require('http');
const server=http.createServer((req,res)=>{
if(req.url==='/')
res.end(`Hello Welcome Aboard`);

else if(req.url==='/about')
res.end( `Here is our long short story`);
else
res.end(`<h1> Oops </h1> <p> We can't find the page </p>`);
});
server.listen(5000); 