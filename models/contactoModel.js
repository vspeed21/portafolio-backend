import mongoose from "mongoose";

const contactoSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true,
  },

  emailOrCell:{
    type: String,
    required: true,
    trim: true,
  },
  
  message:{
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Contacto = mongoose.model('Contacto', contactoSchema);

export default Contacto;