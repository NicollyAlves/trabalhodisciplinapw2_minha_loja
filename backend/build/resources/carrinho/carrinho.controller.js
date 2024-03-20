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
exports.adicionarProdutoAoCarrinho = void 0;
const carrinho_service_1 = require("./carrinho.service");
const http_status_codes_1 = require("http-status-codes");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield (0, carrinho_service_1.listProdutosNoCarrinho)();
        res.status(http_status_codes_1.StatusCodes.OK).json(produtos);
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
});
const adicionarProdutoAoCarrinho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { produtoId } = req.params;
    const { quantidade, usuarioId } = req.body;
    try {
        const novoItemCarrinho = yield (0, carrinho_service_1.addProdutoAoCarrinho)(produtoId, quantidade, usuarioId);
        console.log(novoItemCarrinho);
        res.status(201).json(novoItemCarrinho);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar produto ao carrinho' });
    }
});
exports.adicionarProdutoAoCarrinho = adicionarProdutoAoCarrinho;
exports.default = { index, adicionarProdutoAoCarrinho: exports.adicionarProdutoAoCarrinho };
