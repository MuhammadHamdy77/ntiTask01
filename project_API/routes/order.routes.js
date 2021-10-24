const router = require('express').Router()
const OrdersController = require("../controller/orders.controlller")
const auth = require("../middleware/auth.middleware")

router.get('/all',auth ,OrdersController.allOrder )
router.post('/add' ,auth,OrdersController.addOrder )
router.patch("/updateorder/:id" ,OrdersController.updateOrder)

module.exports = router