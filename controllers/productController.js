const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { where } = require('sequelize');


class ProductController {
    async create(req, res, next) {
        try {
            const {id, name, type, price } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({id, name, type, price, img: fileName });

            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let products = await Product.findAndCountAll();
        return res.json(products);
    }

    async getOne(req, res) {
        const {id} = req.params
        let product = await Product.findOne(
            {
                where:{id}
            }
        );
        return res.json(product);
    }
};


module.exports = new ProductController();