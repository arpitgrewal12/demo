const {Router} = require('express')
const route = Router()
var db = require('../../db')


route.post('/', (req, res) => {
    console.log(req.body)
    var userid = req.body.user_id
 
   
    db.connection.query("DELETE FROM person WHERE user_id = "+userid+" ;", function (err, result, fields) {
        

        if (err) 
        {
            console.log(err)
            res.send({
                "flag" : "144",
                "message" : "user uploaded failed"
            })

        }else{
            res.send({
            "flag" : "143",
            "message" : "user successfully uploaded"
        })
        }
       
       
      });


})

module.exports = route