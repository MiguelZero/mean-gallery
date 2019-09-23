import express from 'express';
import morgan from 'morgan';
import path from 'path';

// Instalar cors con npm, importarlo y agregarlo con app.use(cors())

const app = express();

import indexRoutes from './routes/index';

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
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api', indexRoutes);


// This folder for this application will used to store public files

app.use('/uploads', express.static(path.resolve('uploads')));





export default app;