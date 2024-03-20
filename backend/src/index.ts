import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import { v4 as uuidv4 } from "uuid"
import session from "express-session"

import validateEnv from "./utils/validateEnv"
import setCookieLang from "./middlewares/setCookieLanguage"
import router from "./router"

import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger-output.json"

import cors from "cors"

declare module "express-session" {
    interface SessionData {
        uid: string
        tipoUsuarioId: string
    }
}

dotenv.config()
validateEnv()

const PORT = process.env.PORT ?? 3344
const app = express()

app.use(cors({ credentials: true, origin: "http://localhost:4466" }))
app.use(morgan('combcined'))
app.use(express.json())
app.use(cookieParser())
app.use(setCookieLang)
app.use(session({
    genid: () => uuidv4(),
    secret: "Dm#h@emSo@Sm@A434Ma",
    resave: false,
    saveUninitialized: true
}))
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})