import express from 'express'; 
import authRoutes from './routes/auth.routes.js';


const app = express()
app.use(authRoutes);


export default app