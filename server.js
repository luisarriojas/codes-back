const app = require ('./app');
const PORT = process.env.PORT || 5000



app.listen(PORT,
        () => console.log(`Server Running on port:${PORT}`
    ));








/*
const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/