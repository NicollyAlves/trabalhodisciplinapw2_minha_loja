import * as React from 'react';
import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import { Produto } from '@/types/produto';
import api from '@/utils/api';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

interface ProdutoCardProps {
    id: string
}

export default function ProdutoCard({ id }: ProdutoCardProps) {
    const [quantidade, setQuantidade] = useState(1)
    const [produto, setProduto] = useState<Produto>()
    const precoTotal = produto ? quantidade * produto.preco : 0
    const router = useRouter()

    const handleDelete = (e: any) => {
        e.preventDefault()
        api.delete(`/produto/${id}`).then(() => {
            router.push("/produto")
        })

    }
    useEffect(() => {
        api.get(`/produto/${id}`).then((data) => {
            setProduto(data.data)
        })
    }, [id])

    const increaseQtd = () => {
        if(produto && quantidade < produto.estoque) setQuantidade(quantidade + 1)
    }

    const decreaseQtd = () => {
        if(quantidade >= 1) setQuantidade(quantidade - 1)
    }

    if(!produto){
        return <>Carregando...</>
    }

    return (
    <>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }} >
            <Typography gutterBottom variant="h4" component="div">
              {produto.nome}
            </Typography>
            <ButtonGroup>
                <Button onClick={increaseQtd} variant='contained' size="small">
                    <AddIcon/>
                </Button>
                <Button onClick={decreaseQtd} variant='contained' size="small">
                    <RemoveIcon/>
                </Button>
            </ButtonGroup>
            </div>
            <Typography variant="body2" color="text.secondary">
                Preço: {produto.preco} <br/>
                Estoque: {produto.estoque} <br/>
                Quantidade: {quantidade} <br/>
                Preço total: {precoTotal} <br/>
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton component={Link} href={`/produto/update/${id}`}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete} >
                <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
    </>
  );
}