import { Router } from "express"
import languageController from "./language.controller"
import { validate } from "../../middlewares/validate"
import languagemSchema from "./language.schema"

const router = Router()

router.post("/", validate(languagemSchema), languageController.changeLanguage)

export default router