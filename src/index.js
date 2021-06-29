const app = require('./server');

app.listen(app.get('port'), () =>{
    console.log('Server listening at: http://localhost:'+app.get('port'))
})