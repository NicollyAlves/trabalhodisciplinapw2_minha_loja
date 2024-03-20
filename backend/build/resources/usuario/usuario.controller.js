"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const usuario_service_1 = require("./usuario.service");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        const novoUsuario = yield (0, usuario_service_1.createUsuario)(usuario);
        console.log(novoUsuario);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(novoUsuario);
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.default = { index, create, read, update, remove };
