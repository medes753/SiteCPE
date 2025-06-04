const SessoesModel = require("../Models/SessoesModel");
const UsuarioModel = require("../Models/UsuarioModel");

class SessoesController {
  async create(req, res) {
    try {
      const usuarioEncontrado = await UsuarioModel.findById(
        req.body.id_usuario
      );
      if (!usuarioEncontrado)
        return res.status(404).json({ message: "Usuário não encontrado" });

      const sessoes = await SessoesModel.create(req.body);

      return res.status(200).json(sessoes);
    } catch (error) {
      res.status(500).json({ messa: "Deu ruim aqui!!", error: error.message });
    }
  }
  async read(req, res) {
    try {
      const sessoes = await SessoesModel.find().populate(
        "id_usuario",
        "-senha"
      );

      return res.status(200).json(sessoes);
    } catch (error) {
      res.status(500).json({ messa: "Deu ruim aqui!!", error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id_usuario } = req.params;

      const usuariosEncontrado = await UsuarioModel.findOne({
        id_usuario,
      });
      if (!usuariosEncontrado)
        return res.status(404).json({ message: "usuário não encontrado" });

      await usuariosEncontrado.deleteOne();

      return res.status(200).json({ mensagem: "Sessão deletada com sucesso!" });
    } catch (error) {
      res.status(500).json({ messa: "Deu ruim aqui!!", error: error.message });
    }
  }
}

module.exports = new SessoesController();
