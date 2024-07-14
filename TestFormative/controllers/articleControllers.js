import firebase from '../firebase.js';
import Article from '../models/ArticleModels.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createArticle = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'Article'), data);
    res.status(200).send('Article created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getArticle = async (req, res, next) => {
  try {
    const article = await getDocs(collection(db, 'Article'));
    const articleArray = [];

    if (article.empty) {
      res.status(400).send('No Article found');
    } else {
      article.forEach((doc) => {
        const article = new Article(
          doc.id,
          doc.data().name,
          doc.data().description,
         
        );
        articleArray.push(article);
      });

      res.status(200).send(articleArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const article = doc(db, 'Article', id);
    await updateDoc(article, data);
    res.status(200).send('Article updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Article', id));
    res.status(200).send('Article deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};