"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_controller_1 = __importDefault(require("./produto.controller"));
const produto_schema_1 = __importDefault(require("./produto.schema"));
const validate_1 = require("../../middlewares/validate");
const router = (0, express_1.Router)();
router.get("/", produto_controller_1.default.index);
router.post("/", (0, validate_1.validate)(produto_schema_1.default), produto_controller_1.default.create);
router.get("/:id", produto_controller_1.default.read);
router.put("/:id", (0, validate_1.validate)(produto_schema_1.default), produto_controller_1.default.update);
router.delete("/:id", produto_controller_1.default.remove);
exports.default = router;
