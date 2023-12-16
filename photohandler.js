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

//area 1

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
      const folderId = '1OnfMmpzzI60yr1YUUGydO4DGaRPxGu9e';
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
      const folderId = '18sPhfJGvSE5kPVB9Dy2ZR-JKi8X_H6bu';
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
      const folderId = '1Y9K46yOu1DVU-kjWVt8yfV2p7ifL7ToF';
      const images = await fetchImagesFromFolder(folderId);
      const imageIds = images.map(image => image.id);
      res.json({ imageIds });
    } catch (error) {
      console.error('Error fetching image IDs:', error);
      res.status(500).json({ error: 'An error occurred while fetching image IDs' });
    }
  });

    app.get('/fetch-all', async (req, res) => {
    try {
      const folderId = '1TzWdjJadG34ChRlk3rrAsn4pMIiT6mzR';
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
