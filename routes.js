//import express
const express= require('express')

//import userController
const userController= require('./controller/userController')

//import productController
const productController = require('./controller/productController')

const jwt = require('./middleware/jwtMiddleware')

//import multerConfig

const multerConfig =  require('./middleware/multerMiddleware')


//create an object for router class
const router = new express.Router()

//setup path

//register
router.post('/register',userController.registerController)

//login
router.post('/login',userController.loginController)

//addProduct
router.post('/addproduct',jwt,multerConfig.single('prodImage'),productController.addProductController)

//all products
router.get('/allproducts',productController.getAllProductsController )

//all products2
router.get('/allproducts2',productController.getAllProductsController2 )


//userProduct
router.get('/userProduct',jwt,productController.userProductController)

//Delete
router.delete('/delete/:id',productController.deleteProductController)

//edit product
router.put('/edit-product/:id',jwt,multerConfig.single('prodImage'),productController.editProductController)

//edit profile
router.put('/edit-profile',jwt,multerConfig.single('profile'),userController.editProfileController)



//export the router
module.exports = router