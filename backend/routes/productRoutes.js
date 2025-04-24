import express from 'express';
import { Product } from "../models/productModel.js";
import { Testimony } from '../models/testimoniesModel.js';

const router = express.Router();

/////////// DATABASE MANIPULATION //////////////////
//get all product
router.get('/', async (request, response) => {
    try{
        const products = await Product.find({});

        return response.status(200).json(products)
        //     count: products.length,
        //     data: products,
        // });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get one product by id
router.get('/id/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const product = await Product.findById(id);

        return response.status(200).json(product);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get one product by name
router.get('/:gameName', async (request, response) => {
    try{
        const {gameName} = request.params;
        const product = await Product.find({gameName: gameName});

        return response.status(200).json(product);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//create product
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.gameName ||
            !request.body.type ||
            !request.body.product
        ){
            return response.status(400).send({
                message: 'Send all required fields: gameName, type, product',
            });
        }

        const newProduct = {
            gameName: request.body.gameName,
            gameType: request.body.type,
            product: request.body.product,
            rate: 5,
        }

        const product = await Product.create(newProduct);

        return response.status(201).send(product);
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//update product
router.put('/:id', async (request, response) => {
    try{ 
        if(
            !request.body.gameName ||
            !request.body.type ||
            !request.body.product
        ){
            return response.status(400).send({
                message: 'Send all required fields: gameName, gameType',
            });
        }

        // only take all product id based on gameName
        const productsId = await Product.find({gameName: gameName},{_id: 0, 'product._id':1});

        //get the average rating from testimony
        const rating = await Testimony.aggregate([
            {"$match": { "_id": productsId}},
            {"group": { "_id": null, "avg_rate": {"$avg": "$rate"}}}
        ])
        //for more agregate visit: https://www.slingacademy.com/article/mongodb-aggregation-min-max-sum-avg-count-examples/#google_vignette

        const {id} = request.params;

        const updatedProduct = {
            gameName: request.body.gameName,
            type: request.body.type,
            rate: rating? rating : 5
        }

        const result = await Product.findByIdAndUpdate(id, updatedProduct);

        if(!result){
            return response.status(404).json({message: 'Product not found'});    
        }
        return response.status(201).send({message: 'Product updated succesfully'});
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//delete product
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await Product.findByIdAndDelete(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Product not found'});    
        }
        return response.status(201).send({message: 'Product deleted succesfully'});

    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});
/////////// DATABASE MANIPULATION //////////////////

export default router;