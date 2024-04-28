import { Router } from 'express'
import UsersController from '../Controllers/UsersController.js';


const router = Router();

router.post('/create-new-user', UsersController.createNewUser);

export default router