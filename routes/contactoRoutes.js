import express from 'express';
import { registrar, sendEmail } from '../controllers/contactoController.js';

const router = express.Router();

router.post('/', registrar);
router.post('/cv', sendEmail);


export default router;