import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import conectarDB from './config/db.js';
import contactoRoutes from './routes/contactoRoutes.js'

const app = express();
app.use(express.json());
dotenv.config()
conectarDB();

const dominiosPermitidos = ['http://localhost:3000'];

const corsOption = {
  origin: function(origin, callback) {
    if(dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true,)
    }else{
      callback(new Error('No permitido por CORS'));
    }
  }
}

app.use(cors(corsOption));

app.use('/api/contacto', contactoRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT}`);
})