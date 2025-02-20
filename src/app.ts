import express from 'express';
import middleware from './middleware';
import indexRoutes from './routes/index';
import './config/env';

const app = express();

middleware(app);
app.use('/', indexRoutes);

export default app;
