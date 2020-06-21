const {Router} = require('express')
const route = Router()
var db = require('../../db')


route.post('/', (req, res) => {
    console.log(req.body)
    var name = "'"+req.body.username+"'" || ""
    var size = "'"+req.body.size+"'" || ""
    var heigth = "'"+req.body.height+"'" || ""
    var type = "'"+req.body.type+"'" || ""
 
   
    db.connection.query("INSERT INTO person(username,size,height,type) VALUES ("+name+","+size+","+heigth+","+type+");", function (err, result, fields) {
        

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