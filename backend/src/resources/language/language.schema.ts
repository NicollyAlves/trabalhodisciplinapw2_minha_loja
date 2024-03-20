import Joi from "joi";

const languagemSchema = Joi.object().keys(
    {
        lang: Joi.valid("pt-BR", "en-US"),
    }
)

export default languagemSchema