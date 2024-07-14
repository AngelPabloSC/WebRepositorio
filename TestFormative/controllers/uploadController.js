const admin = require('firebase-admin');
const serviceAccount = require('../path/to/serviceAccountKey.json'); // Path to your Firebase service account key
const { db } = require('../firebase.js'); // Assuming db is your Firestore instance

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-storage-bucket-url' // Replace with your Firebase Storage bucket URL
});

const bucket = admin.storage().bucket();

// Ruta para manejar la subida de archivos
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const file = req.file;
    const filePath = `uploads/${file.originalname}`; // Define the path in Firebase Storage

    const fileUpload = bucket.file(filePath);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    blobStream.on('error', (error) => {
      console.error(error);
      res.status(500).send('Upload failed');
    });

    blobStream.on('finish', async () => {
      // The file upload is complete.
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;

      // Example: Save the file metadata to Firestore
      const metadataRef = await db.collection('fileMetadata').add({
        filename: file.originalname,
        url: publicUrl,
        uploadedAt: admin.firestore.Timestamp.now()
      });

      res.status(200).send('File uploaded successfully. Metadata saved with ID: ' + metadataRef.id);
    });

    blobStream.end(file.buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Upload failed');
  }
});
