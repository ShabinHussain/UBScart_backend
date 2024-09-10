const products = require('../model/productModel');

exports.addProductController = async(req,res)=>{
    console.log('inside addproductcontroller');
    const userId = req.payload
    console.log(userId);
    const{price,title,place,date,contact,email,description} = req.body 
    const prodImage = req.file.filename
    try {
        
            const newProduct = new products({
                price,title,place,date,contact,email,description,prodImage,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
     
        
    } catch (error) {
        res.status(401).json(error)
        
    }


}

exports.getAllProductsController = async(req,res)=>{
   

    const searchKey = req.query.search
  

     // Validate that searchKey is a string
     if (searchKey && typeof searchKey !== 'string') {
        return res.status(400).json({ error: 'Search key must be a string' });
    }
    try {
        
        const query = searchKey ? {
            title:{$regex:searchKey,$options:'i'}
        } : {}

        const allproducts = await products.find(query)
        res.status(200).json(allproducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.userProductController = async(req,res)=>{
    const userId = req.payload
    console.log(userId);

    try {
        const userProduct = await products.find({userId})
        if(userProduct){
            res.status(200).json(userProduct)
        }
        else{
            res.status(406).json('No Project Added Yet')
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getAllProductsController2 = async(req,res)=>{
   

    const searchKey = req.query.search
  

     // Validate that searchKey is a string
     if (searchKey && typeof searchKey !== 'string') {
        return res.status(400).json({ error: 'Search key must be a string' });
    }
    try {
        
        const query = searchKey ? {
            place:{$regex:searchKey,$options:'i'}
        } : {}

        const allproducts = await products.find(query)
        res.status(200).json(allproducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.deleteProductController = async(req,res)=>{
    console.log('inside delete function');
    const {id} = req.params
    console.log(id);

    try {
        //deleteOne - return true or false
        //findByIdAndDelete - document
        const product = await products.findByIdAndDelete({_id:id})
        res.status(200).json(product)

    } catch (error) {
        res.status(401).json(error)

    }


}

exports.editProductController = async(req,res)=>{
    const {id} = req.params
    const userId = req.payload

    const {price, title, place, date, description,contact,email,prodImage} = req.body

    const uploadedImage = req.file ? req.file.filename: prodImage
    
    
    try {

        const existingProduct = await products.findByIdAndUpdate({_id:id},{
            price, title, place, date, description,contact,email,prodImage:uploadedImage,userId       //title:title etc

        })

        await existingProduct.save()
        res.status(200).json(existingProduct)
        
    } catch (error) {
        res.status(401).json(error)

    }
}



