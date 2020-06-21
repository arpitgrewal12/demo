const { Router } = require('express')

const route = Router()



route.use('/add_user', require('./add_user'))
route.use('/view_users', require('./view_users'))
route.use('/update_user', require('./update_user'))
route.use('/delete_user', require('./delete_user'))
module.exports = route