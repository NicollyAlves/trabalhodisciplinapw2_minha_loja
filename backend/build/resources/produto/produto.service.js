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
exports.readProduto = exports.removeProduto = exports.updateProduto = exports.createProduto = exports.produtoAlreadyExists = exports.listProdutos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const listProdutos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.produto.findMany();
});
exports.listProdutos = listProdutos;
const produtoAlreadyExists = (nome) => __awaiter(void 0, void 0, void 0, function* () {
    return !!(yield prisma.produto.findUnique({ where: { nome } }));
});
exports.produtoAlreadyExists = produtoAlreadyExists;
const createProduto = (produto) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.produto.create({ data: produto });
});
exports.createProduto = createProduto;
const updateProduto = (id, produto) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.produto.update({ where: { id }, data: produto });
});
exports.updateProduto = updateProduto;
const removeProduto = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.produto.delete({ where: { id } });
});
exports.removeProduto = removeProduto;
const readProduto = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.produto.findUnique({ where: { id } });
});
exports.readProduto = readProduto;
