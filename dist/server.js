"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express_1 = __importDefault(require("express"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const path_1 = __importDefault(require("path"));
mail_1.default.setApiKey(process.env.SG_KEY || '');
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, './build')));
app.post('/api/contact', (req, res) => {
    if (req.method === 'POST') {
        const clientMsg = {
            to: req.body.email,
            from: 'support@example.com',
            subject: `${req.body.name}様。お問合せありがとうございました。`,
            text: 'お問合せを受け付けました。回答をお待ちください。' +
                req.body.message,
            html: 'お問合せを受け付けました。回答をお待ちください。' +
                req.body.message,
        };
        const managementMsg = {
            to: 'senruttyo@gmail.com',
            from: 'support@example.com',
            subject: `ポートフォリオサイトからお問い合わせ`,
            text: `
            name: ${req.body.name}
            email: ${req.body.email}
            message: ${req.body.content}
          `,
            html: 'お問合せを受け付けました。回答をお待ちください。' +
                req.body.message,
        };
        (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield mail_1.default.send(clientMsg);
                yield mail_1.default.send(managementMsg);
            }
            catch (error) {
                console.error(error);
            }
        }))();
    }
    res.status(200);
});
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './build/index.html'));
});
app.listen(port, () => console.log(`server run ${port}`));
