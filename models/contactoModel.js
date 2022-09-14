import mongoose from "mongoose";

const contactoSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,
    trim: true,
  },

  email:{
    type: String,
    required: true,
    trim: true,
  },

  telefono: {
    type: String,
    default: null,
  },
  
  mensaje:{
    type: String,
    required: true,
  }
});

const Contacto = mongoose.model('Contacto', contactoSchema);

export default Contacto;