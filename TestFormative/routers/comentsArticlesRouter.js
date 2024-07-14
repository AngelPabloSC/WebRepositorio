import express from 'express';

import {
  createComentsArticle,
 // getProduct,
 getComentsArticles,
 updateComentsArticle,
 deleteComentsArticle,
} from '../controllers/cometsArticlesControllers.js';

const router = express.Router();

router.get('/', getComentsArticles);
router.post('/new', createComentsArticle);
// router.get('/product/:id', getProduct);
router.put('/update/:id', updateComentsArticle);
router.delete('/delete/:id', deleteComentsArticle);

export default router;
