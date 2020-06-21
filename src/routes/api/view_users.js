const {Router} = require('express')
const route = Router()
var db = require('../../db')

route.get('/',(req , res) => {
    

    db.connection.query("SELECT * FROM person",function(err,result,fields){
        if (err) 
        {
            console.log(err)
            res.send({
                "flag" : "144",
                "message" : "product uploaded failed"
            })

        }else{
            res.send({
            "flag" : "143",
            "message" : result
        })
        }
    })

    

})

module.exports = route