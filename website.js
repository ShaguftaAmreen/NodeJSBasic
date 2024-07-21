const http=require("http");
const fs=require("fs")

const port=process.env.PORT || 3009;

const server=http.createServer((req,res)=>{
// res.statusCode=200;
console.log(req.url);
res.setHeader('Content-Type','text/html');
if(req.url=="/"){
    res.statusCode=200;
res.end("<h1>Hello! everyone this is my first http server</h1><p>Amreen has started learning Node JS</p>");}
else if(req.url=="/about"){
    res.statusCode=200;
    res.end("<h1> About Hello! everyone this is my first http server</h1><p>About Amreen has started learning Node JS</p>");}
    else if(req.url=="/hello"){
        res.statusCode=200;
        const data=fs.readFileSync("index.html")
        res.end(data.toString())
       // res.end("<h1> About Hello! everyone this is my first http server</h1><p>About Amreen has started learning Node JS</p>")
       ;}
    else{
      //  res.harry();
        res.statusCode=400;
        res.end("<h1>Not found</h1><p>Else Amreen has started learning Node JS</p>");}
}
);

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})