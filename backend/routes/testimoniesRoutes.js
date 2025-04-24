import express from 'express';
import { Testimony } from '../models/invoiceModelModel';

/////////// DATABASE MANIPULATION //////////////////
//get all testimony
router.get('/', async (request, response) => {
    try{
        const Testimonies = await Testimony.find({});

        return response.status(200).json(Testimonies)
        //     count: Testimonies.length,
        //     data: Testimonies,
        // });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get one testimony by id
router.get('/id/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const testimony = await Testimony.findById(id);

        return response.status(200).json(testimony);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//create testimony
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.phoneNumber ||
            !request.body.testimonyDescription ||
            !request.body.rate
        ){
            return response.status(400).send({
                message: 'Send all required fields: invoiceNumber, product, status, and phoneNumber',
            });
        }

        const emptyTestimony = {
            phoneNumber: request.body.phoneNumber,
            testimonyDescription: "",
            rate:5,
        }

        const newInvoice = {
            invoiceNumber: request.body.invoiceNumber,
            product: request.body.product,
            testimony: emptyTestimony,
            status: request.body.status,
        }

        const testimony = await Testimony.create(newInvoice);

        return response.status(201).send(testimony);
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//update testimony
router.put('/:id', async (request, response) => {
    try{ 
        if(
            !request.body.invoiceNumber ||
            !request.body.product ||
            !request.body.status
        ){
            return response.status(400).send({
                message: 'Send all required fields: invoiceNumber, product, and status',
            });
        }

        const {id} = request.params;

        const result = await Testimony.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Testimony not found'});    
        }
        return response.status(201).send({message: 'Testimony updated succesfully'});
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//delete testimony
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await Testimony.findByIdAndDelete(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Testimony not found'});    
        }
        return response.status(201).send({message: 'Testimony deleted succesfully'});

    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});
/////////// DATABASE MANIPULATION //////////////////

export default router;