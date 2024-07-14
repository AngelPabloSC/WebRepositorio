import firebase from '../firebase.js';
import User from '../models/userModels.js';
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

export const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'user'), data);
    res.status(200).send('user created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await getDocs(collection(db, 'user'));
    const userArray = [];

    if (user.empty) {
      res.status(400).send('No User found');
    } else {
      user.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().name,
          doc.data().email,
          doc.data().lastname,
        );
        userArray.push(user);
      });

      res.status(200).send(userArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = doc(db, 'user', id);
    await updateDoc(user, data);
    res.status(200).send('user updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'user', id));
    res.status(200).send('user deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};