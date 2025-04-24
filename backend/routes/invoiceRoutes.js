import express from 'express';
import { Invoice } from '../models/invoiceModelModel';

/////////// DATABASE MANIPULATION //////////////////
//get all invoice
router.get('/', async (request, response) => {
    try{
        const Invoices = await Invoice.find({});

        return response.status(200).json(Invoices)
        //     count: Invoices.length,
        //     data: Invoices,
        // });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get one invoice by id
router.get('/id/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const invoice = await Invoice.findById(id);

        return response.status(200).json(invoice);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//create invoice
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.invoiceNumber ||
            !request.body.product ||
            !request.body.status ||
            !request.body.phoneNumber
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

        const invoice = await Invoice.create(newInvoice);

        return response.status(201).send(invoice);
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//update invoice
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

        const result = await Invoice.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Invoice not found'});    
        }
        return response.status(201).send({message: 'Invoice updated succesfully'});
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//delete invoice
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await Invoice.findByIdAndDelete(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Invoice not found'});    
        }
        return response.status(201).send({message: 'Invoice deleted succesfully'});

    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});
/////////// DATABASE MANIPULATION //////////////////

export default router;