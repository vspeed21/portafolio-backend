import sendEmailCV from "../helpers/sendEmailCV.js";
import Contacto from "../models/contactoModel.js";

const registrar = async (req, res) => {
  const { emailOrCell } = req.body;
  const { lang } = req.query;

  const existeEmail = await Contacto.findOne({ emailOrCell });

  if (existeEmail) {
    const error = new Error(lang == 'es-ES' || lang == 'es' ? 'Mensaje duplicado' : 'Duplicate message');
    return res.status(404).json({ msg: error.message });
  }

  try {
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.json({ msg: lang == 'es-ES' || lang == 'es' ? 'Mensaje enviado correctamente' : 'Message sent successfully' });

  } catch (error) {
    console.log(error);
  }
}

const sendEmail = async (req, res) => {
  const { tipo } = req.body;
  sendEmailCV(tipo);
  res.json({ msg: 'Mensaje enviado' });
}

export {
  registrar,
  sendEmail,
}