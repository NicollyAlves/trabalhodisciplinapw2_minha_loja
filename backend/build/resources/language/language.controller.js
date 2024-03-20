"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const changeLanguage = (req, res) => {
    const { lang } = req.body;
    res.cookie("lang", lang);
    res.status(http_status_codes_1.StatusCodes.OK).json(http_status_codes_1.ReasonPhrases.OK);
};
exports.default = { changeLanguage };
