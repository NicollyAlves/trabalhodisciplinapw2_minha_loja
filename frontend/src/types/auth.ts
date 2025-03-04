export interface Auth {
    nome:string
    tipoUsuario: "admin" | "client"
}


export interface Usuario {
    id: string
    nome: string
    email: string
    senha: string
    tipoUsuarioId: string
}

export type SignUpDto = Pick<Usuario, "nome" | "email" | "senha">
export type LoginDto = Pick<Usuario, "email" | "senha">