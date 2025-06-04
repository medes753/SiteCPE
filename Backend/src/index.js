const dotenv = require("dotenv");
const app = require("./App");
const Loaders = require("./Loaders/index");

dotenv.config();
Loaders.start();

const PORT = process.env.PORT || 8000;

Loaders.start()
  .then(() => {
    app.listen(PORT, () => console.log("Servidor Rodando"));
  })
  .catch((err) => {
    console.error("Erro ao iniciar Loaders:", err.message);
  });
