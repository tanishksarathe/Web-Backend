const express = require('express')
const app = express()
const port = 3000
// Client side

// yaha pr load krvana h routes ko / ya to direct define kr lo ya to kahi or define kr k yha le aaao
const routes = require('./router/items');
 // import ho gyi h ab load
app.use('/routes', routes);


// again for a new file 

const birds = require('./router/birds');
app.use('/api', birds);

// Server Side
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })   