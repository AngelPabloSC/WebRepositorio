import express from 'express';

import {
  createUser,
 // getProduct,
 getUser,
 updateUser,
 deleteUser,
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUser);
router.post('/new', createUser);
// router.get('/product/:id', getProduct);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
