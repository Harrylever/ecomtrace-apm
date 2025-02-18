import express from 'express';
import middleware from './middleware';
import indexRoutes from './routes/index';
import repeaterRoutes from './routes/repeater';
import './config/env';

const app = express();

middleware(app);
app.use('/', indexRoutes);
app.use('/repeater', repeaterRoutes);

export default app;
