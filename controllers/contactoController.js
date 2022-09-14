import Contacto from "../models/contactoModel.js";

const registrar = async (req, res) => {
   const { email } = req.body;

   const existeEmail = await Contacto.findOne({email});

   if(existeEmail) {
    const error = new Error('Mensaje duplicado');
    return res.status(400).json({msg: error.message});
   }

  try {
    const contacto = new Contacto(req.body);
    const contactoGuardado = await contacto.save();
    res.json(contactoGuardado)

  } catch (error) {
    console.log(error);
  }

  // res.send({msg: 'Mensaje enviado correctamente'});
}

export{
  registrar
}