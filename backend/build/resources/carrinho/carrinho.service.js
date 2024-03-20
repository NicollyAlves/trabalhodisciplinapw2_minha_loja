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
exports.listProdutosNoCarrinho = exports.addProdutoAoCarrinho = exports.verificarProdutoExiste = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const verificarProdutoExiste = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const produto = yield prisma.produto.findUnique({ where: { id: productId } });
    return !!produto;
});
exports.verificarProdutoExiste = verificarProdutoExiste;
const addProdutoAoCarrinho = (produtoId, quantidade, usuarioId) => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar se o produto existe
    const produto = yield prisma.produto.findUnique({
        where: {
            id: produtoId
        }
    });
    console.log("oi");
    console.log(produto);
    if (!produto) {
        throw new Error('Produto não encontrado');
    }
    // Criar um novo item no carrinho
    const novoItemCarrinho = yield prisma.itemCarrinho.create({
        data: {
            produto: {
                connect: {
                    id: produtoId
                }
            },
            quantidade,
            preco: produto.preco, // Defina o preço do item com o preço do produto
            usuario: {
                connect: {
                    id: usuarioId
                }
            },
            nome: produto.nome,
            estoque: produto.estoque
        }
    });
    console.log(novoItemCarrinho);
    console.log("novoItemCarrinho");
    return novoItemCarrinho;
});
exports.addProdutoAoCarrinho = addProdutoAoCarrinho;
const listProdutosNoCarrinho = () => __awaiter(void 0, void 0, void 0, function* () {
    const itensCarrinho = yield prisma.itemCarrinho.findMany({
        include: {
            produto: true
        }
    });
    const produtosNoCarrinho = itensCarrinho.map(item => item.produto);
    return produtosNoCarrinho;
});
exports.listProdutosNoCarrinho = listProdutosNoCarrinho;
