import sendEmailCV from "../helpers/sendEmailCV.js";
import Contacto from "../models/contactoModel.js";

const registrar = async (req, res) => {
  const { emailOrCell } = req.body;

  const existeEmail = await Contacto.findOne({ emailOrCell });

  if (existeEmail) {
    const error = new Error('Duplicate message');
    return res.status(404).json({ msg: error.message });
  }

  try {
    const contacto = new Contacto(req.body);
    await contacto.save();
    res.json({ msg: 'Message sent successfully' })

  } catch (error) {
    console.log(error);
  }

  // res.send({msg: 'Mensaje enviado correctamente'});
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