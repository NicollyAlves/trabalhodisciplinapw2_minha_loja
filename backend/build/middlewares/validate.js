"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const http_status_codes_1 = require("http-status-codes");
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false
        });
        if (error)
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error.details);
        next();
    };
};
exports.validate = validate;
