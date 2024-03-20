import { Request, Response } from 'express'
import { addProdutoAoCarrinho, listProdutosNoCarrinho } from './carrinho.service'
import { StatusCodes } from 'http-status-codes';


const index = async(req: Request, res: Response) => {
    try {
        const produtos = await listProdutosNoCarrinho()
        res.status(StatusCodes.OK).json(produtos)
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err)
    }
}

export const adicionarProdutoAoCarrinho = async (req: Request, res: Response) => {
    const { produtoId } = req.params;
    const { quantidade, usuarioId } = req.body;

    try {
        const novoItemCarrinho = await addProdutoAoCarrinho(produtoId, quantidade, usuarioId);
        res.status(201).json(novoItemCarrinho);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar produto ao carrinho'});
    }
}

export default { index, adicionarProdutoAoCarrinho }