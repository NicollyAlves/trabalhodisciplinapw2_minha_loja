import { Router, Request, Response } from "express"
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  
  
const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("hello world!")
})

router.get("/bemvindo/:nome", (req: Request, res: Response) => {
    const nome = req.params.nome
    res.send(`Bem vinda ${nome}`)
})

router.get("/lorem/:qtd", (req: Request, res: Response) => {
    res.send(lorem
    .generateParagraphs(parseInt(req.params.qtd))
    .replace(/\n/g, "<br><br>\n"))
})

export default router