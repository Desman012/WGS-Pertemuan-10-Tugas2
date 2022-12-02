// memanggil module express
const express = require('express')
// membuat variable untuk menampung function express
const app = express()
// membuat variable untuk port
const port = 3000

//menerima request dari client
app.get('/', (req, res) => {
    //root __dirname untuk menjalankan programnya bisa diluar folder tersebut
    res.sendFile('index.html',{root:__dirname})
})


app.get('/about', (req, res) => {
    res.sendFile('about.html',{root:__dirname})

})
//menerima request 
app.get('/contact', (req, res) => {
    res.send('this is contact page')
})

//memakai parameter, dan query
app.get('/product/:id', (req, res) => {
    res.send(`Product id : ${req.params.id} <br><br>Product name : ${req.query.nama}`)
})

// use untuk pemanggilan path apapun
app.use('/', (req, res) => {
    //menyetting status html menjadi 404 (not found)
    res.status(404)
    // menuliskan di web browser 'Page not found'
    res.send('Page not found 404')
})

// membaca port 
app.listen(port, () => {
    // memunculkan tulisan diterminal
    console.log(`Example app listening on port ${port}`)
})