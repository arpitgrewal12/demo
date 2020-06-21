var pg = require('pg')

const connectionString ='postgres://postgres:9789@localhost/person'
const client = new pg.Client(connectionString);


function createConnection(){
    console.log("reached here")
   client.connect(function(err, client, done){
       if(err){
        console.log(err)
       } else{
           console.log("connected")
       }

   })
}


module.exports.connection = client;
module.exports.createConnection = createConnection;
