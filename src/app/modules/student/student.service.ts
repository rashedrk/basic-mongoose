import { Student } from './student.interface';
import { StudentModel } from './student.model';

//Database operation
const createStudentIntoDB = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;
}

const getStudentsFromDB = async () => {
    const result = await StudentModel.find()
    return result;
}

export const StudentServices = {
    createStudentIntoDB,
    getStudentsFromDB
}