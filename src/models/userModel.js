/* Model: Lida diretamente com os dados da aplicação,
 seja em memória, arquivos ou banco de dados. É responsável
por acessar, criar, atualizar e excluir os dados.*/

import users from "../config/db.js";

export const getAllUsers = async () => users;

export const getUserById = async (userId) => users.find((user) => user.id === userId);

export const createUser = async (newUser) => {
  users.push(newUser);
  return newUser;
};

// Função para excluir um usuário pelo ID
export const deleteUser = async (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1); 
    //array.splice(início, deleteCount, item1, item2, ...)
    // Se o índice for negativo, a contagem começa do final do array.
    return true;
  }
  return false;
};
