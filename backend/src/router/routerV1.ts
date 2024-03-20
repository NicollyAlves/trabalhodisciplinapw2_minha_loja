import { Router } from "express"
import produtoRouter from "../resources/produto/produto.router"
import exercicioRouter from "../resources/exercicio/exercicio.router"
import languageRouter from "../resources/language/language.router"
import usuarioRouter from "../resources/usuario/usuario.router"
import authRouter from "../resources/auth/auth.router"
import carrinhoRouter from "../resources/carrinho/carrinho.router"


const router = Router()

router.use(
    "/",
    // #swagger.tags = ['Auth'],
    authRouter
)
router.use("/", authRouter)
router.use("/produto", produtoRouter)
router.use("/language", languageRouter)
router.use("/carrinho", carrinhoRouter)
router.use("/usuario", usuarioRouter)
router.use("/exercise", exercicioRouter)

export default router