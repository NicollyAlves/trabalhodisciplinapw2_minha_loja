import { ItemCarrinho } from "@prisma/client";


export type CreateProdutoDto = Pick<ItemCarrinho, 'quantidade' | 'preco' | 'produtoId'>
