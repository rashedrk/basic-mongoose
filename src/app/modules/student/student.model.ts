import { Schema, model } from 'mongoose';
import { Guardian, Student, Username, localGuardian } from './student.interface';

const usernameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    maxlength: [20, "First Name can not be more than 20 characters"],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE} is not in a capitalized format"
    },
    
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, "Last Name is required"] },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's Name is required"] },
  fatherOccupation: { type: String, required: [true, "Father's Occupation is required"] },
  fatherContactNo: { type: String, required: [true, "Father's Contact Number is required"] },
  motherName: { type: String, required: [true, "Mother's Name is required"] },
  motherOccupation: { type: String, required: [true, "Mother's Occupation is required"] },
  motherContactNo: { type: String, required: [true, "Mother's Contact Number is required"] },
});

const localGuardianSchema = new Schema<localGuardian>({
  name: { type: String, required: [true, "Local Guardian's Name is required"] },
  occupation: { type: String, required: [true, "Local Guardian's Occupation is required"] },
  contactNo: { type: String, required: [true, "Local Guardian's Contact Number is required"] },
  address: { type: String, required: [true, "Local Guardian's Address is required"] },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, "Student ID is required"], unique: true },
  name: {
    type: usernameSchema,
    required: [true, "Student's Name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "{VALUE} is not accepted",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, "Email is required"], unique: true },
  contactNo: { type: String, required: [true, "Contact Number is required"] },
  emergencyContactNo: { type: String, required: [true, "Emergency Contact Number is required"] },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: "{VALUE} is not a valid blood group",
    },
  },
  presentAddress: { type: String, required: [true, "Present Address is required"] },
  permanentAddress: { type: String, required: [true, "Permanent Address is required"] },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local Guardian information is required"],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
