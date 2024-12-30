/* Service: Contém a lógica de negócios e regras
 da aplicação. Realiza validações, manipulação de
dados e delega tarefas ao modelo. */

import users from "../config/db.js";
import { getAllUsers, getUserById, createUser, deleteUser } from "../models/userModel.js";

export const getAllUsersService = async () => {
  return await getAllUsers();
};

export const getUserByIdService = async (id) => {
  return await getUserById(id);
};

export const createUserService = async (userData) => {
  const existingUser = users.find((users) => users.email === userData.email);
  if (existingUser){
    throw new Error('Email já cadastrado');
  }
  userData.id = users.length + 1;
  return await createUser(userData);
};

export const deleteUserService = async (id) => {
  const user = await getUserById(id);
  if (!user){
    throw new Error('Usuário não encontrado');
  }
  return await deleteUser(id);
}

