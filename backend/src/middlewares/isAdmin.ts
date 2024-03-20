import { NextFunction, Request, Response } from "express"
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constants"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if(!req.session.tipoUsuarioId || req.session.tipoUsuarioId == TiposUsuarios.CLIENT) return res.status(StatusCodes.FORBIDDEN).json(ReasonPhrases.FORBIDDEN)
    next()
}

export default isAdmin