import styles from "./produto.module.css"
import Link from "next/link"
import api from "@/utils/api";
import { useEffect, useState } from "react";
import { Produto } from "@/types/produto";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import { List, ListItem, ListItemText } from "@mui/material";

function ProdutoIndex() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    api.get("/produto", { withCredentials: true }).then((data) => {
        setProdutos(data.data)
    })
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
        <h1 style={{ marginTop: 0 }} >Produtos</h1>
        <Button component={Link} href="/produto/create" variant="contained" style={{ height: 30 }} > <AddIcon/> </Button>
      </div>

      <List>
        { produtos.map((prod) => (
        <>
          <Divider key={prod.id} variant="inset" component="li" />
            <Link href={`/produto/${prod.id}`}>
                  <li className={styles.listaProdutos} key={prod.id}>
                    <h3>{prod.nome}</h3>
                  </li>
            </Link>
          <Divider variant="middle" component="li" />
        </>
        ))}
      </List>
    </div>
  );
}

export default ProdutoIndex