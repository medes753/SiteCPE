const mongoose = require("mongoose");

async function startDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Banco de dados inicializado");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  }
}

module.exports = startDB;
