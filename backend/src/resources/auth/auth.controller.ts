import { Request, Response } from "express"
import { LoginDto, SignupDto } from "./auth.types"
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants"
import { ReasonPhrases, StatusCodes } from "http-status-codes"
import { createUsuario } from "./../usuario/usuario.service"
import { checkCredentials } from "./auth.service"

const signup = async (req: Request, res: Response) => {
    const usuario: SignupDto = req.body
    try {
        const novoUsuario = await createUsuario({ ...usuario, tipoUsuarioId: TiposUsuarios.CLIENT})
        res.status(StatusCodes.CREATED).json(novoUsuario)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const login = async (req: Request, res: Response) => {
    const credentials = req.body as LoginDto
    try {
        const usuario = await checkCredentials(credentials)
        if(!usuario) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)
        req.session.uid = usuario.id
        req.session.tipoUsuarioId = usuario.tipoUsuarioId

        res.status(StatusCodes.OK).json({nome: usuario.nome, tipoUsuario: usuario.tipoUsuarioId == TiposUsuarios.CLIENT ? "client": "admin"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

const logout = async (req: Request, res: Response) => {
    if(!req.session.uid) return res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED)
    req.session.destroy((err) => {
        if (err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
        res.status(StatusCodes.OK).json(ReasonPhrases.OK)
    })
}

export default { signup, login, logout }