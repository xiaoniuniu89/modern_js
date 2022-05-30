const { contentType } = require('express/lib/response');
const http = require('http')
const fs = require('fs');
const res = require('express/lib/response');

const server = http.createServer((request, response) => {
    console.log(`request made to ${request.url}`)

    let path = './views/'
    switch(request.url){
        case '/':
            path += 'index.html'
            response.statusCode = 200;
            break
        case '/about':
            path += 'about.html'
            response.statusCode = 200;
            break
        case '/about-us':
            response.statusCode = 301;

            response.setHeader('location', '/about')
            response.end()
            break
        default:
            path += '404.html'
            response.statusCode = 404;
            break
    }

    response.setHeader('Content-Type', 'text/html')

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            response.end()
        }
        else{
            // response.write(data)
            response.end(data)
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})

