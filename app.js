require('dotenv').config();
const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT


//renderisamos 
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/components')

//servir contenido estatico 
//dejaremos esta linea de código, ya que en se encuentran 
//los estilos css
app.use(express.static('public'));


app.get('/', (req, res) => {
    //renderisamos 
    res.render('home');
})

app.get('/generic', (req, res) => {
    res.render('generic')
})

app.use('/elements', (req, res) => {
    res.render('elements')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})