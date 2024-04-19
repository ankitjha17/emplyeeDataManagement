import mongoose, { Schema } from "mongoose";

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    expectedSalary: {
        type: Number,
        required: true,
    },
    selectedRejected: {
        type: String,
        required: true
    },
    noticePeriod: {
        type: String,
        required: true,
    },
    date : {
type: Date,
required: true,
default: Date.now()
    }
})

export const Employee = mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema)