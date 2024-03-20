"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const uuid_1 = require("uuid");
const express_session_1 = __importDefault(require("express-session"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const setCookieLanguage_1 = __importDefault(require("./middlewares/setCookieLanguage"));
const router_1 = __importDefault(require("./router"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./swagger-output.json"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3344;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true, origin: "http://localhost:4466" }));
app.use((0, morgan_1.default)('combcined'));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(setCookieLanguage_1.default);
app.use((0, express_session_1.default)({
    genid: () => (0, uuid_1.v4)(),
    secret: "Dm#h@emSo@Sm@A434Ma",
    resave: false,
    saveUninitialized: true
}));
app.use("/api", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
app.use(router_1.default);
app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});
