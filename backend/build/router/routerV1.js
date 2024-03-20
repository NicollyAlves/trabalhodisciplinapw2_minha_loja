"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_router_1 = __importDefault(require("../resources/produto/produto.router"));
const exercicio_router_1 = __importDefault(require("../resources/exercicio/exercicio.router"));
const language_router_1 = __importDefault(require("../resources/language/language.router"));
const usuario_router_1 = __importDefault(require("../resources/usuario/usuario.router"));
const auth_router_1 = __importDefault(require("../resources/auth/auth.router"));
const carrinho_router_1 = __importDefault(require("../resources/carrinho/carrinho.router"));
const router = (0, express_1.Router)();
router.use("/", 
// #swagger.tags = ['Auth'],
auth_router_1.default);
router.use("/", auth_router_1.default);
router.use("/produto", produto_router_1.default);
router.use("/language", language_router_1.default);
router.use("/carrinho", carrinho_router_1.default);
router.use("/usuario", usuario_router_1.default);
router.use("/exercise", exercicio_router_1.default);
exports.default = router;
