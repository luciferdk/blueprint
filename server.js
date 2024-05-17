const express = require('express');
const app = express();
const publicPath = __dirname + '/public';
app.use(express.static(publicPath));
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(publicPath + '/index.html');
  });

// Replace with your actual database connection logic
const users = []; // Example in-memory storage

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: 'User saved successfully' });
});

app.listen(port, () => console.log('Server running on port 3000'));
