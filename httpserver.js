const http=require("http");

const port=process.env.PORT || 3004;

const server=http.createServer((req,res)=>{
res.statusCode=200;
console.log(req.url);
res.setHeader('Content-Type','text/html');
res.end("<h1>Hello! everyone this is my first http server</h1><p>Amreen has started learning Node JS</p>");
});

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})