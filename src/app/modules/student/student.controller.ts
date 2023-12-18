import { Request, Response } from "express";
import { StudentServices } from "./student.service";


const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;

        //call service func to send this data
        const result = await StudentServices.createStudentIntoDB(studentData);

        //send response
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllStudents = async(req: Request, res: Response) => {
    try {
        const result = await StudentServices.getStudentsFromDB();

        res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
}