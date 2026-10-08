const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require('./routes/users');

app.use('/api/v1/user', userRouter);

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port ' + (process.env.port || 8081));