"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const URI = `mongodb+srv://PouriaRezaei:${process.env.mongodb_pass}@cluster0.uxmyd.mongodb.net/MernPractice?retryWrites=true&w=majority`;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/api/test", (req, res) => {
    res.json({ data: "sample data" });
});
mongoose_1.default
    .connect(URI)
    .then(() => app.listen(4000, () => {
    console.log("Server is running successfully...");
}))
    .catch((err) => console.log(err));
