"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const languagemSchema = joi_1.default.object().keys({
    lang: joi_1.default.valid("pt-BR", "en-US"),
});
exports.default = languagemSchema;
