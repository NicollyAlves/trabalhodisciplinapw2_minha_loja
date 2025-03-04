import { Request, Response } from "express"
import { createProduto, 
         listProdutos, 
         produtoAlreadyExists, 
         readProduto,
         removeProduto,
         updateProduto
} from "./produto.service"
import {
	ReasonPhrases,
	StatusCodes,
	//getReasonPhrase,
	//getStatusCode,
} from 'http-status-codes';


const index = async(req: Request, res: Response) => {
    try {
        const produtos = await listProdutos()
        res.status(StatusCodes.OK).json(produtos)
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const create = async(req: Request, res: Response) => {
    const produto = req.body
    try {
        if (await produtoAlreadyExists(produto.nome)){
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT)
        }
        const novoProduto = await createProduto(produto)
        res.status(StatusCodes.CREATED).json(novoProduto)
    } catch(err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const read = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const produto = await readProduto(id)
        if (!produto) 
            return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        else
            res.status(StatusCodes.OK).json(produto)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const produto = req.body

    try {
        const produtoAtualizado = await updateProduto(id, produto)
        res.status(StatusCodes.OK).json(produtoAtualizado)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

const remove = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const produtoApagado = await removeProduto(id)
        res.status(StatusCodes.OK).json(produtoApagado)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}


export default { index, create, read, update, remove}