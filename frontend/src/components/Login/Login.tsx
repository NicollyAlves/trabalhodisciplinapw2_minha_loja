import { LoginDto } from "@/types/auth";
import api from "@/utils/api";
import React, { FormEvent, useState, useContext } from "react";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { AuthContext } from "@/provider/AuthProvider";

function Login() {
    const { auth, setAuth } = useContext(AuthContext)
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [error, setError] = useState<string>("")
    const router = useRouter()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const credenciais = {email: senha!, senha: senha!}
        api.post(`/login`, credenciais, {withCredentials: true}).then((data) => {
            setError("")
            setAuth({ nome: data.data.nome, tipoUsuario: data.data.tipoUsuario})
            router.push("/produto")
        }).catch((err) => {
            setError("email e/ou senha inválidos")
        })
    }

    return (
         <>
            <h1>Login de Usuário</h1>
            <form onSubmit={onSubmit}>
                <Box sx={{mb:2}} >
                    <TextField label="Email" sx={{width: 300}} required value={email} onChange={(e) => setEmail(e.target.value)}  />
                </Box>
                <Box sx={{mb:2}} >
                    <TextField label="Senha" sx={{width: 300}} type={"password"} required value={senha} onChange={(e) => setSenha(e.target.value)} />
                </Box>
                <Box sx={{mb:2}} >
                    <Typography variant="body1" sx={{color: "red"}}>
                        {error}
                    </Typography>
                </Box>
                <Button type="submit" variant="contained">
                    Entrar
                </Button>
            </form>
        </>
    )
}

export default Login