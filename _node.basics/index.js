const fs = require('fs');
const path = require('path');
// const userObj = require('./user');

// console.log('Hi', __dirname, userObj);
// console.log(os.platform(), os.arch());
// console.log(os.freemem(), os.totalmem());

// const EventEmitter = require('events');

// class Logger extends EventEmitter {
//     log(message) {
//         this.emit('message', `${message} ${Date.now()}`);
//     }
// }

// const logger = new Logger();

// logger.on('message', (data) => {
//     console.log(data);
// });

// logger.log('Хелло')

const http = require('http');
const webServer = http.createServer((req, res) => {
    console.log(req.url);
    if (req.method === 'GET'){
        switch(req.url) {
            case '/':
                res.writeHead(200, {
                    'Content-Type' : 'text/html'
                });
                fs.readFile(
                    path.join(__dirname, 'views', 'index.html'), 
                    'utf-8',
                    (err, content) => {
                        if(err) throw err;
                        res.end(content);
                    });
            break;
            case '/about':
                res.writeHead(200, {
                    'Content-Type' : 'text/html'
                });
                fs.readFile(
                    path.join(__dirname, 'views', 'about.html'), 
                    'utf-8',
                    (err, content) => {
                        if(err) throw err;
                        res.end(content);
                    });
            break;
            case '/api/users':
                res.writeHead(200, {
                    'Content-Type' : 'application/json'
                });

                const users = [
                    {id: 1, name: "Vasily", age: 30, gender: 'male'},
                    {id: 2, name: "Maria", age: 25, gender: 'female'}
                ];

                res.end(JSON.stringify(users));
            break;
        }
    } else if (req.method === 'POST'){

        const body = [];

        res.writeHead(200, {
            'Content-Type' : 'text/html;charset=utf-8'
        });

        req.on('data', (data) => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            const message = body.toString().split('=')[1];
            res.end(`
                <h1>Вы написали</h1>
                <p>Ваше сообщение: ${decodeURIComponent(message).replace("+", " ")}</p>
            `);
        });

    }

    // res.write('Hi, it works, and it can be changed');
    // res.end();
});

webServer.listen(3000, () => {
    console.log('Server is running');
});