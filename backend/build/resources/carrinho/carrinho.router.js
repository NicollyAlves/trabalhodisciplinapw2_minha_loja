"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrinho_controller_1 = __importDefault(require("./carrinho.controller"));
const router = (0, express_1.Router)();
router.get("/", carrinho_controller_1.default.index);
router.post("/adicionar/:id", carrinho_controller_1.default.adicionarProdutoAoCarrinho);
exports.default = router;
