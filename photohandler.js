const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

const apiKey = 'AIzaSyBb39NC2Idreb7GmyfGVVnmY0MuYjt-zIk';

async function fetchImagesFromFolder(folderId) {
  const drive = google.drive({ version: 'v3' });
  const response = await drive.files.list({
    q: `'${folderId}' in parents and mimeType contains 'image/'`,
    key: apiKey, 
  });
  return response.data.files;
}

app.get('/fetch-zoo1-area1-bella', async (req, res) => {
    try {
      const folderId = '1aY5lai4yqfzlD8i92RsMVfwbz19jwpSK';
      const images = await fetchImagesFromFolder(folderId);
      const imageIds = images.map(image => image.id);
      res.json({ imageIds });
    } catch (error) {
      console.error('Error fetching image IDs:', error);
      res.status(500).json({ error: 'An error occurred while fetching image IDs' });
    }
  });

  app.get('/fetch-zoo1-area1-luna', async (req, res) => {
    try {
      const folderId = '1ErvaAbguVp0LpGG28sc5ANwpNGoPIOQg';
      const images = await fetchImagesFromFolder(folderId);
      const imageIds = images.map(image => image.id);
      res.json({ imageIds });
    } catch (error) {
      console.error('Error fetching image IDs:', error);
      res.status(500).json({ error: 'An error occurred while fetching image IDs' });
    }
  });

  app.get('/fetch-zoo1-area2-fluffy', async (req, res) => {
    try {
      const folderId = '1ErvaAbguVp0LpGG28sc5ANwpNGoPIOQg';
      const images = await fetchImagesFromFolder(folderId);
      const imageIds = images.map(image => image.id);
      res.json({ imageIds });
    } catch (error) {
      console.error('Error fetching image IDs:', error);
      res.status(500).json({ error: 'An error occurred while fetching image IDs' });
    }
  });
  
  app.get('/fetch-zoo1-area2-oreo', async (req, res) => {
    try {
      const folderId = '1ErvaAbguVp0LpGG28sc5ANwpNGoPIOQg'; //ini masih bisa kepake kayanya kalo mau nyoba,  
      const images = await fetchImagesFromFolder(folderId);
      const imageIds = images.map(image => image.id);
      res.json({ imageIds });
    } catch (error) {
      console.error('Error fetching image IDs:', error);
      res.status(500).json({ error: 'An error occurred while fetching image IDs' });
    }
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
