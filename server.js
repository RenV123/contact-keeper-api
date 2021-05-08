const express = require('express');

const app = express();

//Creating an endpoint
app.get('/', (request, response) =>
  response.json({ message: 'Welcome to the contact keeper api' })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
