const http = require('http');
const path = require('path');
const status = require('http-status');

let _product;

const createProduct = (req, res) => {
    const product = req.body;

    _product.create(product)
        .then((data) => {
            res.status(200);
            res.json({ msg: "Producto creado correctamente", data: data });
        })
        .catch((err) => {
            res.status(400);
            res.json({ msg: "Error", data: err });
        })
}

const findAllProduct = (req, res) => {
    _product.find()
        .then((data) => {
            if (data.length == 0) {
                res.status(status.NO_CONTENT);
                res.json({ msg: "No se encontraron productos" });
            }
            else {
                res.status(status.OK);
                res.json({ msg: "Éxito", data: data });
            }
        })
        .catch((error) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error", err: error });
        });
}

const findByIdProduct = (req, res) => {
    const { id } = req.params;
    const params = {
        _id: id
    }
    _product.findById(params)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Éxito", data: data });
        })
        .catch((error) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error", err: error });
        })
}

const updateProduct = (req, res) => {
    const { id } = req.params; //const id=req.params.id;
    const params = {
        _id: id
    }
    _product.findByIdAndUpdate(params, req.body)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Exito", data: data });
        }).catch((error) => {
            res.status(status.NOT_FOUND);
            res.json({ msg: "Error", err: error });
        });
}

const deleteProduct = (req, res) => {
    const { id } = req.params; //const id=req.params.id;
    const params = {
        _id: id
    }
    _product.findByIdAndRemove(params)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Éxito", data: data });
        })
        .catch((error) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error", err: error });
        })
}

module.exports = (Product) => {
    _product = Product;
    return ({
        createProduct,
        findAllProduct,
        findByIdProduct,
        updateProduct,
        deleteProduct
    });
}