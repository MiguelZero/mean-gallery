"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
// Instalar cors con npm, importarlo y agregarlo con app.use(cors())
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Settings
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
// Routes
app.use('/api', index_1.default);
// This folder for this application will used to store public files
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
