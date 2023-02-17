import mongoose from "mongoose";

const betAPostaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome do usuário deve ser preenchido"],
    trim: true,
    maxlength: [40, "Máximo de 40 caracteres para o nome do usuário"],
    minlength: [10, "Mínimo de 10 caracteres para o nome do usuário"],
  },
  phone: {
    type: Number,
    required: [true, "O telefone para contato deve ser preenchido"],
    unique: true,
    trim: true,
  },
  chavePix: {
    type: String,
    required: [true, "A chave pix deve ser preenchida"],
    unique: false,
    trim: true,
  },
  aposta: {
    type: Array,
    required: [true, "Todos os campos da aposta devem ser preenchidos"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now("dd/mm/yyyy"),
  },
});

const BetUser = mongoose.model("BetAposta", betAPostaSchema);

export default BetUser;
