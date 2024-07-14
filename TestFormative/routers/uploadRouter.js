import express from 'express';
import multer from 'multer';
import { uploadFileMiddleware } from '../controllers/uploadController.js'; // Importa uploadFileMiddleware usando import

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No se ha subido ningún archivo.');
    }

    // Llama a la función uploadFileMiddleware del controlador
    const result = await uploadFileMiddleware(req, res);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error al subir el archivo.');
  }
});

export default router; // Exporta router como un módulo ES6
