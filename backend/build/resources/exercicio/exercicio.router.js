"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lorem_ipsum_1 = require("lorem-ipsum");
const lorem = new lorem_ipsum_1.LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("hello world!");
});
router.get("/bemvindo/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Bem vinda ${nome}`);
});
router.get("/lorem/:qtd", (req, res) => {
    res.send(lorem
        .generateParagraphs(parseInt(req.params.qtd))
        .replace(/\n/g, "<br><br>\n"));
});
exports.default = router;
