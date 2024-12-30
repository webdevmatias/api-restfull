/* Controller: Camada responsável por receber requisições HTTP,
chamar os serviços apropriados e retornar as respostas ao 
cliente. Atua como intermediária entre a API e a lógica de negócios.*/

import {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  deleteUserService
} from "../services/userService.js";

// usersController.js
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService(); // Aguarda o retorno da função assíncrona
    res.json(users); // Retorna os usuários
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter usuários", error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(parseInt(id, 10)); // Aguarda a Promise
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json(user); // Retorna o usuário
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Dados inválidos" });
    }
    const user = await createUserService({ name, email, password }); // Chama o serviço para criar o usuário
    res.status(201).json(user); // Retorna o usuário criado
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUserService(parseInt(id, 10)); // Chama o serviço para deletar o usuário
    res.status(204).end(); // Retorna status 204 No Content
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};