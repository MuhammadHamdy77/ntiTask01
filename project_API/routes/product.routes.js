const router = require('express').Router()
const ProductController = require('../controller/product.controller')



router.get("/all" , ProductController.allProd)
router.post("/addproduct" , ProductController.addProd)
router.get("/singproduct/:id" , ProductController.singProd)
router.delete("/delete/:id" , ProductController.delProd)

module.exports = router