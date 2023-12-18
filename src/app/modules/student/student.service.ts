import { Student } from './student.interface';
import { StudentModel } from './student.model';

//Database operation
const createStudentIntoDB = async (student: Student) => {
    const result = await StudentModel.create(student);
    return result;
}

export const StudentServices = {
    createStudentIntoDB
}