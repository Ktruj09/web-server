//app.js esta es prueba. 
const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        const persona = {
            id: 1,
            name: 'Kevin Villeda',
            edad: 24,
            email: 'strujdk90e@jkkjoq.com'
        }

        res.write(JSON.stringify(persona));
        res.end()
    })
    .listen(3000)

console.log('Listening in the port https://localhost:3000');