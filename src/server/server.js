require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true,
    exposedHeaders: ['set-cookie'],
  }),
);

// accepte body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', require('./routes/user.router'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('server run on port ' + `http://localhost:${PORT}`);
});
