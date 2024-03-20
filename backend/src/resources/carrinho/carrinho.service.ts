import { PrismaClient, Produto } from "@prisma/client";
const prisma = new PrismaClient()


export const verificarProdutoExiste = async (productId: string): Promise<boolean> => {
    const produto = await prisma.produto.findUnique({where: { id: productId }})
    return !!produto
}

export const addProdutoAoCarrinho = async (produtoId: string, quantidade: number, usuarioId: string) => {    // eslint-disable-next-line no-useless-catch
        const produto = await prisma.produto.findUnique({
            where: {
                id: produtoId
            }
        });

        console.log("oi")
        console.log(produto)

        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        const novoItemCarrinho = await prisma.itemCarrinho.create({
            data: {
                produto: {
                    connect: {
                        id: produtoId
                    }
                },
                quantidade,
                preco: produto.preco,
                usuario: {
                    connect: {
                        id: usuarioId
                    }
                },
                nome: produto.nome,
                estoque: produto.estoque
            }
        });
        console.log(novoItemCarrinho)
        console.log("novoItemCarrinho")

        return novoItemCarrinho;
}


export const listProdutosNoCarrinho = async (): Promise<Produto[]> => {
    const itensCarrinho = await prisma.itemCarrinho.findMany({
        include: {
            produto: true
        }
    });

    const produtosNoCarrinho = itensCarrinho.map(item => item.produto);

    return produtosNoCarrinho;
}
