const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SessoesModel = require("./SessoesModel");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  cargo: String,
  senha: {
    type: String,
    select: false,
  },
  status: String,
});

UsuarioSchema.pre("save", async function (next) {
  const usuario = this;

  if (usuario.isModified("senha")) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(usuario.senha, salt);

    usuario.senha = hash;
  }

  next();
});

UsuarioSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function () {
    const usuario = this;

    return SessoesModel.deleteOne({ id_usuario: usuario.id });
  }
);

const UsuarioModel = mongoose.model("usuarios", UsuarioSchema);
module.exports = UsuarioModel;
