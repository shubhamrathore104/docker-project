const express = require('express');
const path = require('path');
//const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to render signup form
app.get('/signup', (req, res) => {
  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  res.render('signup', { day_of_week: dayOfWeek });
});
app.get('/', (req, res) => {
  res.redirect('/signup');
});


// Route to handle form submission (forward to Flask backend)
app.post('/signup', async (req, res) => {
  const { name, password } = req.body;

  // Send data to Flask backend
  const fetch = (await import('node-fetch')).default;
  const response = await fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, password })
  });

  const result = await response.json();
  res.send(`Flask backend responded: ${JSON.stringify(result)}`);
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
