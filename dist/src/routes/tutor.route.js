"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tutor_controler_1 = require("../controller/tutor.controler");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get("/tutors", (req, res) => {
    // Lógica da rota
    res.json({ message: "Teste tutor" });
});
router.post("/tutors", tutor_controler_1.createTutor, (req, res) => {
});
exports.default = router;
