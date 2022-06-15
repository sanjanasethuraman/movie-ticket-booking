import express from "express";
import { body, check } from "express-validator";

import { signup, login, addMovie, addTheatre } from "../controllers/admin";

router.post('/signup-admin',body('email').isEmail().withMessage('Invalid Email Id'),check('password')
.isLength({ min: 8 }).withMessage('Password must be at least 8 chars long')
.matches(/^(?=.*\d)(?=.*[0-9]).{1,}$/,"i").withMessage('Password must contain a number')
.matches(/^(?=.*\d)(?=.*[a-z]).{1,}$/,"i").withMessage('Password must contain a Lowercase letter')
.matches(/^(?=.*\d)(?=.*[A-Z]).{1,}$/,"i").withMessage('Password must contain a Uppercase letter')
.matches(/^(?=.*\d)(?=.*[^a-zA-Z0-9]).{1,}$/,"i").withMessage('Password must contain a Special Character'), signup);

router.post('/login-admin',body('email').isEmail().withMessage('Invalid Email Id'),check('password')
.isLength({ min: 8 }).withMessage('Password must be at least 8 chars long')
.matches(/^(?=.*\d)(?=.*[0-9]).{1,}$/,"i").withMessage('Password must contain a number')
.matches(/^(?=.*\d)(?=.*[a-z]).{1,}$/,"i").withMessage('Password must contain a Lowercase letter')
.matches(/^(?=.*\d)(?=.*[A-Z]).{1,}$/,"i").withMessage('Password must contain a Uppercase letter')
.matches(/^(?=.*\d)(?=.*[^a-zA-Z0-9]).{1,}$/,"i").withMessage('Password must contain a Special Character'), login);

router.post('/add-movie', addMovie);

router.post('/add-theatre', addTheatre);