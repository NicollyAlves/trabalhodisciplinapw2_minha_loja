import api from "@/utils/api";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { SignUpDto } from "@/types/auth";
import { useRouter } from "next/router";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignUp(){
    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [confirmSenha, setConfirmSenha] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [viewSenha, setViewSenha] = useState<boolean>(false)
    const [viewConfirmSenha, setViewConfirmSenha] = useState<boolean>(false)


    const router = useRouter()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(senha != confirmSenha) setError("As senhas são diferentes.")
        else {
            const credenciais: SignUpDto = {nome: nome!, email: senha!, senha: senha!}
            api.post(`/signup`, credenciais).then((data) => {
                router.push("/produto")
            })       
        }
        
    }

    return (
        <>
            <h1>Criação de Conta</h1>
            <form onSubmit={onSubmit}>
                <Box sx={{mb:2}} >
                    <TextField label="Nome" sx={{width: 300}} required value={nome} onChange={(e) => setNome(e.target.value)}  />
                </Box>
                <Box sx={{mb:2}} >
                    <TextField label="Email" sx={{width: 300}} required value={email} onChange={(e) => setEmail(e.target.value)}  />
                </Box>
                <Box sx={{mb:2}} >
                    <TextField label="Senha" sx={{width: 300}} type={viewSenha ? "text" : "password"} required value={senha} onChange={(e) => setSenha(e.target.value)} 
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton onClick={() => {setViewSenha(!viewSenha)}}  >
                                {viewSenha ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>,
                      }}
                    />
                </Box>
                <Box>
                    <TextField label="Confirme a senha" sx={{width: 300}} type={viewConfirmSenha ? "text" : "password"} required value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)} 
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <IconButton onClick={() => {setViewConfirmSenha(!viewConfirmSenha)}}  >
                                    {viewConfirmSenha ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>,
                          }}
                        />
                </Box>
                <Box sx={{mb:2}} >
                    <Typography variant="body1" sx={{color: "red"}}>
                        {error}
                    </Typography>
                </Box>
                <Button type="submit" variant="contained">
                    Cadastrar
                </Button>
            </form>
        </>
    )
}

export default SignUp