import { Router } from "express"
import carrinhoController from "./carrinho.controller"

const router = Router()

router.get("/", carrinhoController.index)
router.post("/:id", carrinhoController.adicionarProdutoAoCarrinho)

export default router
