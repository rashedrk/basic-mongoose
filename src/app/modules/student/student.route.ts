import express from "express";
import { StudentControllers } from "./student.controller";

const route = express.Router();

//call controller function
route.get('/create-student', StudentControllers.createStudent);