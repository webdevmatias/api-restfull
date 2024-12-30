/* Routes: Define os endpoints da API e associa cada 
rota a uma função do controller, organizando a 
estrutura das requisições. */

import { Router } from 'express';
import { getAllUsers, getUserById, createUser, deleteUser } from '../controllers/usersController.js';

const router = Router();

router.get('/', getAllUsers); // Retorna todos os usuários
router.get('/:id', getUserById); // Retorna um usuário específico pelo ID
router.post('/', createUser); // Cria um novo usuário
router.delete('/:id', deleteUser);


export default router;
