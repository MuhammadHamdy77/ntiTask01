
const router = require('express').Router()
const userControllers = require('../controllers/userControllers')

router.get("" ,userControllers.goAll )
router.get("/all" ,userControllers.showAll )
router.get("/single/:id" ,userControllers.singleUser )
router.get("/add" ,userControllers.add )
router.get("/delete/:id" ,userControllers.del )
router.get("/edit/:id" ,userControllers.edit )
router.post("/edit/:id" ,userControllers.updateUser )


router.get('/addPost',userControllers.addPost)
router.post('/addPost',userControllers.setData)
module.exports = router