const router = require('express').Router()
const Product = require('../models/Product')
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const BASEURL = "../demands/";

// create product
router.post('/create', async (req, res) => {
    const {clientId, price, description, image} = req.body;
    
    if(!clientId) {
        res.status(422).json({error: 'O usuário é obrigatório!'});
    }

    const id = new mongoose.Types.ObjectId();

    const product = {
        id,
        clientId,
        price, 
        description,
        image
    };

    try {
        await Demand.create(demand);

        res.status(201).json({message: 'Produto inserida!'});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
})

// get product by client
router.get('/getProductByClient', async (req, res) => {
    const clientId = req.query.clientId;
    
    const product = await Product.find({ clientId: clientId });
    
    if(product.length == 0){
        res.status(422).json({message: 'Cliente sem produtos cadastradas!'});
        return;
    }

    try {
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// get all products
router.get('/getAllproducts', async (req, res) => {
    const product = await Product.find({});

    if(product.length == 0){
        res.status(422).json({message: 'Nenhum produto cadastrada!'});
        return;
    }

    try {
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// get specific product
router.get('/getOneDemands', async (req, res) => {
    const clientId = req.query.clientId;
    const id = req.query.id;

    const demand = await Demand.findOne({ clientId: clientId, id: id });

    if(demand.length == 0){
        res.status(422).json({message: 'Demanda inexistente!'});
        return;
    }

    try {
        res.status(200).json(demand)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// delete product
router.delete('/delete', async (req, res) => {
    const clientId = req.query.clientId;
    const id = req.query.id
    
    const product = await Product.findOne({ clientId: clientId, id: id });

    if(product.length == 0){
        res.status(422).json({message: 'Produto inexistente!'});
        return;
    }

    try {
        await Product.deleteOne({ clientId: clientId, id: id });

        res.status(200).json({ message: 'Produto removida!' });
    } catch (error) {
        res.status(500).json({error: error});
    }

});

// update product
router.patch('/:id', async (req, res) => {
    let {id, clientId, price} = req.body;

    const product = {
        id,
        clientId,
        price,
    };

    try {
        const updatedProduct = await Product.updateOne({id, clientId}, product);

        if(updatedProduct.matchedCount === 0) {
            res.status(422).json({message: 'Produto não encontrada!'});
            return;
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error: error});
    }

});

module.exports = router
