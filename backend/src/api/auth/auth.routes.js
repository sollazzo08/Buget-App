const express = require('express');
// const yup = require('yup');

const router = express.Router();

// function validPassword(password, username) {
//   return password.toLowerCase() !== username.toLowerCase()
//     && yup
//       .string()
//       .min(8)
//       .max(100)
//       .matches(/[^A-Za-z]/)
//       .matches(/[A-Z]/)
//       .matches(/[a-z]/)
//       .matches(/[0-9]/)
//       .validate(password);
// }

// router.post('/signup', (req, res, next) => {
//   const {name, email, password} = req.body;

// });

// router.post('/signin', (req, res, next) => {

// });

module.exports = router;
