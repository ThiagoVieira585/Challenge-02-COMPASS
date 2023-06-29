"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tutor_route_1 = __importDefault(require("./src/routes/tutor.route"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = 27017;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(tutor_route_1.default);
mongoose_1.default
    .connect("mongodb+srv://thiagogatovieiradasilva585:admin123@cluster0.zbxllgz.mongodb.net/")
    .then(() => {
    console.log("Banco conectado");
    app.listen(port, () => {
        console.log(`Servidor conectado na porta ${port}.`);
    });
})
    .catch((err) => console.log(err));
