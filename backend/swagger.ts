import swaggerAutoGen from "swagger-autogen"
import dotenv from "dotenv"
dotenv.config()

const doc = {
    info: {
        title: "API da Loja virtual",
        description: "Documentação da API"
    },
    host: `${process.env.HOST}:${process.env.PORT}`
}

const outputFile = "./src/swagger-output.json"
const routes = ["./src/router/index.ts"]

swaggerAutoGen()(outputFile, routes, doc)