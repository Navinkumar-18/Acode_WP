const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/' && req.method=='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(`
            <h1>Welcome</h1>
            <a href="/about">About</a>
            <a  href="/contact">Contact</a>
  `);
    }
    else if(req.url=='/about' && req.method=='GET'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(`
                <h1>About Page</h1>
                <p> This is a simple node js web app</p>
                `);
    }
    else if(req.url=='/contact' && req.method=='GET'){
                res.writeHead(200,{'Content-Type':'text/html'});
res.end(`
    <h1>Contact</h1>
    <form action='/submit' method='POST'>
     Name:<input type="text" name="name">
     <button type="submit">Submit</button>
    `);
    }
    else if(req.url=='/submit' && req.method=='POST'){
        let body="";
        req.on('data',chunck=>{
            body+=chunck;
        });
        req.on('end',()=>{
         res.writeHead(200,{'Content-Type':'text/html'});
         res.end(`
            <h1>Form Submitted<h1>
            <h1>Data:${body}</h1>
            `);
        });

    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end(`
            <h1>404-page not found<h1>
            `);
    }
});
server.listen(3000,()=>{
   console.log("Server Running at port http://localhost:3000/");
})