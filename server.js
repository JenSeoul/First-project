const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {

    // Build file path
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // Extension of file
    let extname = path.extname(filePath);
    // Initial content type
    let contentType = 'text/html';
    // Check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.mp3':
            contentType = 'audio/mpeg';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break
        case '.png':
            contentType = 'image/png'
            break;
    }
    // Read file 
    fs.readFile(filePath, (err,content)=> {
        if(err){
            if(err.code === 'ENOENT'){
                // Page not found 404
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content)=>{
                    res.writeHead(200, {'content-Type': 'text/html'});
                    res.end(content, 'utf-8')
                })
            }
            else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        }else{
            // Success
            res.writeHead(200, {'content-Type': contentType})
            res.end(content)
        }
    })  
})

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => console.log(`Now server is running on port ${PORT}`))