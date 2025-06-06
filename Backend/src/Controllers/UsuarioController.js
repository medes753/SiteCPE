const UsuarioModel = require("../Models/UsuarioModel");
const bcrypt = require("bcrypt");

class UsuarioController {
  async create(req, res) {
    try {
      const { nome, email, senha, cargo, status } = req.body;

      const senhaHash = await bcrypt.hash(senha, 10);

      const usuario = await UsuarioModel.create({
        nome,
        email,
        senha: senhaHash,
        cargo,
        status,
      });

      const { senha: _, ...novoUsuario } = usuario.toObject();

      return res.status(201).json(novoUsuario);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Deu ruim parceiro!!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const usuarios = await UsuarioModel.find();

      return res.status(200).json(usuarios);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Deu ruim parceiro!!", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const usuariosEncontrado = await UsuarioModel.findById(id);

      if (!usuariosEncontrado)
        return res.status(404).json({ message: "usuário não encontrado" });

      const usuario = await usuariosEncontrado.set(req.body).save();

      return res.status(200).json(usuario);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Deu ruim parceiro!!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const usuariosEncontrado = await UsuarioModel.findById(id);
      if (!usuariosEncontrado)
        return res.status(404).json({ message: "usuário não encontrado" });

      await usuariosEncontrado.deleteOne();

      return res
        .status(200)
        .json({ mensagem: "Usuario deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Deu ruim parceiro!!", error: error.message });
    }
  }
}

module.exports = new UsuarioController();
