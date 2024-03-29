const http = require('http');
const path = require('path');
const status = require('http-status');

let _brand;

const createBrand = (req, res) => {
    const brand = req.body;

    _brand.create(brand)
        .then((data) => {
            res.status(200);
            res.json({ msg: "Marca creada correctamente", data: data });
        })
        .catch((err) => {
            res.status(400);
            res.json({ msg: "Error", data: err });
        })
}

const findAllBrand = (req, res) => {
    _brand.find()
        .then((data) => {
            if (data.length == 0) {
                res.status(status.NO_CONTENT);
                res.json({ msg: "No se encontraron marcas" });
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

const findByIdBrand = (req, res) => {
    const { id } = req.params;
    const params = {
        _id: id
    }
    _brand.findById(params)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Éxito", data: data });
        })
        .catch((error) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error", err: error });
        })
}

const updateBrand = (req, res) => {
    const { id } = req.params; //const id=req.params.id;
    const params = {
        _id: id
    }
    _brand.findByIdAndUpdate(params, req.body)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Exito", data: data });
        }).catch((error) => {
            res.status(status.NOT_FOUND);
            res.json({ msg: "Error", err: error });
        });
}

const deleteBrand = (req, res) => {
    const { id } = req.params; //const id=req.params.id;
    const params = {
        _id: id
    }
    _brand.findByIdAndRemove(params)
        .then((data) => {
            res.status(status.OK);
            res.json({ msg: "Éxito", data: data });
        })
        .catch((error) => {
            res.status(status.BAD_REQUEST);
            res.json({ msg: "Error", err: error });
        })
}

module.exports = (Brand) => {
    _brand = Brand;
    return ({
        createBrand,
        findAllBrand,
        findByIdBrand,
        updateBrand,
        deleteBrand
    });
}