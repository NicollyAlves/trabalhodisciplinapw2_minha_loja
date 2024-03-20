import React from "react";
import { useRouter } from "next/router";
import ProdutoUpdate from "@/components/produto/ProdutoUpdate";

function ProdutoUpdatePage(){
    const router = useRouter()
    const id = router.query.produtoId as string
    if(!id) return <div>Produto não existente</div>
    return (
        <ProdutoUpdate id={id} />
    )
}

export default ProdutoUpdatePage