const router = require('express').Router();

module.exports = (wagner) => {
    const userCtrl = wagner.invoke((User) => require('../controllers/user.controller')(User));

    router.post('/', (req, res) => userCtrl.createUser(req, res));
    router.get('/', (req, res) => userCtrl.findAllUser(req, res));
    router.get('/:id', (req, res) => userCtrl.findByIdUser(req, res));
    router.put('/:id', (req, res) => userCtrl.updateUser(req, res));
    router.delete('/:id', (req, res) => userCtrl.deleteUser(req, res));
    router.post('/login', (req, res) => userCtrl.login(req, res));
    return router;
}