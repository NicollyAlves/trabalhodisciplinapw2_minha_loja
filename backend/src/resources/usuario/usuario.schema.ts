import Joi from "joi"
import { TiposUsuarios } from "../../resources/tipoUsuario/tipoUsuario.constants"

const usuarioSchema = Joi.object().keys({
    nome: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
    tipoUsuarioId: Joi.valid(TiposUsuarios.ADMIN, TiposUsuarios.CLIENT)
})

export default usuarioSchema