const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("index.html");
const about = fs.readFileSync("about.html");

// create server

const server = http.createServer((request, respnse) =>{
    // console.log(request.url);
    // respnse.send("node is working")
    // respnse.end("node is working")

    if (request.url == "/"){
        return respnse.end(homePage);
    }
    else if (request.url == "/about"){
        return respnse.end(about);
    }
    else if (request.url == "/contact"){
        return respnse.end(contact);
    }
    else{
        respnse.writeHead(404);
        return respnse.end("the page could not be found");
        
    }
});

const port = 3000;
//http.Server.listener(1995)
server.listen(port);