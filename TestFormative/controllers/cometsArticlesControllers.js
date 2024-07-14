import firebase from '../firebase.js';
import ComentsArticles from '../models/comentsAticlesModels.js';
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

export const createComentsArticle = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'ComentsArticles'), data);
    res.status(200).send('ComentsArticles created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getComentsArticles = async (req, res, next) => {
  try {
    const comentsArticles = await getDocs(collection(db, 'ComentsArticles'));
    const comentsArticlesArray = [];

    if (comentsArticles.empty) {
      res.status(400).send('No ComentsArticles found');
    } else {
      comentsArticles.forEach((doc) => {
        const comentsArticles = new ComentsArticles(
          doc.id,
          doc.data().comment,
          doc.data().referenceUser,
          doc.data().articlereference,
        );
        comentsArticlesArray.push(comentsArticles);
      });

      res.status(200).send(comentsArticlesArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateComentsArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const comentsArticles = doc(db, 'ComentsArticles', id);
    await updateDoc(comentsArticles, data);
    res.status(200).send('ComentsArticles updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteComentsArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'ComentsArticles', id));
    res.status(200).send('ComentsArticles deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};