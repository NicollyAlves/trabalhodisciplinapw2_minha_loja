"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const language_controller_1 = __importDefault(require("./language.controller"));
const validate_1 = require("../../middlewares/validate");
const language_schema_1 = __importDefault(require("./language.schema"));
const router = (0, express_1.Router)();
router.post("/", (0, validate_1.validate)(language_schema_1.default), language_controller_1.default.changeLanguage);
exports.default = router;
