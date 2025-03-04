import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const changeLanguage = (req: Request, res: Response) => {
    const { lang } = req.body
    res.cookie("lang", lang)
    res.status(StatusCodes.OK).json(ReasonPhrases.OK)
}

export default { changeLanguage }