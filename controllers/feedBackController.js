const { FeedBack } = require('../models/models');
const ApiError = require('../error/ApiError');


class FeedBackController {
    async create(req, res, next) {
        try {
            const {name, email, telephone, text} = req.body;
            const feedBack = await FeedBack.create({name, email, telephone, text});
            return res.json(feedBack);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
};


module.exports = new FeedBackController();