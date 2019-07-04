const router = require('express').Router();

module.exports = (wagner) => {
    const brandCtrl = wagner.invoke((Brand) => require('../controllers/brand.controller')(Brand));

    router.post('/', (req, res) => brandCtrl.createBrand(req, res));
    router.get('/', (req, res) => brandCtrl.findAllBrand(req, res));
    router.get('/:id', (req, res) => brandCtrl.findByIdBrand(req, res));
    router.put('/:id', (req, res) => brandCtrl.updateBrand(req, res));
    router.delete('/:id', (req, res) => brandCtrl.deleteBrand(req, res));

    return router;
}