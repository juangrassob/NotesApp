require('dotenv').config();

console.log(process.env.TESTING)

const app = require('./server');
require('./database');


app.listen(app.get('port'), () =>{
    console.log('Server listening at: http://localhost:'+app.get('port'))
})