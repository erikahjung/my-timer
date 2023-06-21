const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//parse the application/json & the application/x-www-form-urlencoded incoming Request Object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/mytimer', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//unknown route handler
app.use((req, res) => res.sendStatus(404));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));