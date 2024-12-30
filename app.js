import express from "express";
import dotenv from "dotenv"; // Importa o dotenv
import userRoutes from "./src/Routes/userRoutes.js"; // Importa as rotas

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Define o prefixo '/users' para todas as rotas de usuários
app.use("/users", userRoutes);

// Obtém a porta do arquivo .env ou usa 3000 por padrão
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
