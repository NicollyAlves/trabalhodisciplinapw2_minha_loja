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
const produto_service_1 = require("./produto.service");
const http_status_codes_1 = require("http-status-codes");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield (0, produto_service_1.listProdutos)();
        res.status(http_status_codes_1.StatusCodes.OK).json(produtos);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = req.body;
    try {
        if (yield (0, produto_service_1.produtoAlreadyExists)(produto.nome)) {
            res.status(http_status_codes_1.StatusCodes.CONFLICT).json(http_status_codes_1.ReasonPhrases.CONFLICT);
        }
        const novoProduto = yield (0, produto_service_1.createProduto)(produto);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(novoProduto);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const produto = yield (0, produto_service_1.readProduto)(id);
        if (!produto)
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(http_status_codes_1.ReasonPhrases.NOT_FOUND);
        else
            res.status(http_status_codes_1.StatusCodes.OK).json(produto);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const produto = req.body;
    try {
        const produtoAtualizado = yield (0, produto_service_1.updateProduto)(id, produto);
        res.status(http_status_codes_1.StatusCodes.OK).json(produtoAtualizado);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const produtoApagado = yield (0, produto_service_1.removeProduto)(id);
        res.status(http_status_codes_1.StatusCodes.OK).json(produtoApagado);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
exports.default = { index, create, read, update, remove };
