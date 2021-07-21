const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/', (req, res) => {
    Products.find({}, (err, result) => {
        if (err) return;
        res.json(result)
    })
})

router.post('/create/products', (req, res) => {
    const {
        productName,
        productImageUri,
        productDescription,
        marketPrice,
        sellingPrice,
        productCategory,
        productFor
    } = req.body;

    const addNewProduct = new Products({
        productName,
        productImageUri,
        productDescription,
        marketPrice,
        sellingPrice,
        productCategory,
        productFor
    })

    addNewProduct.save()
        .then(result => res.json(result))
        .catch(err => console.log(err))
});

router.post('/:id/edit/product', (req, res)=> {
    const {
        productName,
        productImageUri,
        productDescription,
        marketPrice,
        sellingPrice,
        productCategory,
        productFor
    } = req.body;

    const editProduct = {
        productName,
        productImageUri,
        productDescription,
        marketPrice,
        sellingPrice,
        productCategory,
        productFor
    };
    Products.findByIdAndUpdate(req.params.id, editProduct, (err, result) => {
        if(err) {
            console.log("Error" + err);
        }
        res.json(result);
    })
})

router.delete('/:id/delete/product', (req, res)=> {
    Products.findByIdAndDelete(req.params.id, (err, result)=> {
        if(err) res.status(400).send(err)
        res.json(result)
    })
})

router.get('/:id', (req, res) => {
    Products.findById(req.params.id, (err, result) => {
        if (err) return;
        res.json(result)
    })
})

module.exports = router;