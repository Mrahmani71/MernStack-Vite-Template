const asynchandler = require('express-async-handler');
const getUser = asynchandler((req, res) => {
  res.status(200).json({
    message: 'This is an user',
  });
});

module.exports = {
  getUser,
};
