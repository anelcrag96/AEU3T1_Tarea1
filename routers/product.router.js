const router = require('express').Router();

module.exports = (wagner) => {
    const productCtrl = wagner.invoke((Product) => require('../controllers/product.controller')(Product));

    router.post('/', (req, res) => productCtrl.createProduct(req, res));
    router.get('/', (req, res) => productCtrl.findAllProduct(req, res));
    router.get('/:id', (req, res) => productCtrl.findByIdProduct(req, res));
    router.put('/:id', (req, res) => productCtrl.updateProduct(req, res));
    router.delete('/:id', (req, res) => productCtrl.deleteProduct(req, res));

    return router;
}