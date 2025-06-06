function verificarUsuario(req, res, next) {
  const usuarioId =
    req.params.id || req.params.id_usuario || req.body.id_usuario;

  if (String(req.usuarioId) !== String(usuarioId)) {
    return res.status(401).json({ message: "Operação não autorizada" });
  }

  next();
}

module.exports = verificarUsuario;
