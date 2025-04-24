import express from 'express';
import {User} from "../models/userModel.js"

const router = express.Router();

/////////// DATABASE MANIPULATION //////////////////
//get all user
router.get('/', async (request, response) => {
    try{
        const users = await User.find({});

        return response.status(200).json({
            count: users.length,
            data: users,
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get one user
router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;
        const user = await User.findById(id);

        return response.status(200).json(user);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//create user
router.post('/', async (request, response) => {
    try{
        if(
            !request.body.username ||
            !request.body.password ||
            !request.body.email
        ){
            return response.status(400).send({
                message: 'Send all required fields: username, password, email',
            });
        }

        const newUser = {
            username: request.body.username,
            password:request.body.password,
            email:request.body.email,
        }

        const user = await User.create(newUser);

        return response.status(201).send(user);
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//update user
router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.username ||
            !request.body.password ||
            !request.body.email
        ){
            return response.status(400).send({
                message: 'Send all required fields: username, password, email',
            });
        }

        const {id} = request.params;

        const result = await User.findByIdAndUpdtae(id, request.body);

        if(!result){
            return response.status(404).json({message: 'User not found'});    
        }
        return response.status(201).send({message: 'User updated succesfully'});
    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});

//delete user
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await User.findByIdAndDelete(id, request.body);

        if(!result){
            return response.status(404).json({message: 'User not found'});    
        }
        return response.status(201).send({message: 'User deleted succesfully'});

    }catch(error){
        console.log(error.massage);
        response.status(500).send({message: error.message});
    }
});
/////////// DATABASE MANIPULATION //////////////////

export default router;