import express from 'express';

import {
  createArticle,
 // getProduct,
 getArticle,
 updateArticle,
 deleteArticle,
} from '../controllers/ArticleControllers.js';

const router = express.Router();

router.get('/', getArticle);
router.post('/new', createArticle);
// router.get('/product/:id', getProduct);
router.put('/update/:id', updateArticle);
router.delete('/delete/:id', deleteArticle);

export default router;
