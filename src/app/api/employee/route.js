//create get & post API 
//how we create in nodejs - MERN stack
/* route.get('/get-employee', async(req, res) => {
})  */

import { connectDb } from "@/database/db";
import { Employee } from "@/models/Employee";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request) {
    /* what is NextResponse here - as in mern we use 
    res.json same in that way we wil NextResponse*/
    // return NextResponse.json('Hello World')

    try {
        //get employee
        const getEmployee = await Employee.find()
        return NextResponse.json(getEmployee)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: 'Failed to get Employee'
            },
            {
                status: 404
            }
        )

    }
}

export async function POST(request) {
    //data
    const { name, email, salary, expectedSalary, selectedRejected, noticePeriod } = await request.json();

    //validation
    if (!name || !email || !salary || !expectedSalary || !selectedRejected || !noticePeriod) {
        return NextResponse.json({
            error: 'All fields are required'
        },
            {
                status: 404,
            })
    }

    //find employee
    const employee = await Employee.findOne({ email });

    //condition
    if (employee) {
        return NextResponse.json(
            {
                error: "Employee Already Exist "
            },
            {
                status: 404
            }
        )
    }

    //create employee
    const newEmployee = new Employee({
        name,
        email,
        salary,
        expectedSalary,
        selectedRejected,
        noticePeriod,
    })
    try {
        const savedEmployee = await newEmployee.save();
        return NextResponse.json(
            {
                savedEmployee,
                message: "New employee data saved successfully"
            },
            {
                status: 200,
            }
        )
    } catch (error) {
       console.log(error);
       return NextResponse.json(
        {
            error: "Failed to save employee"
        },
        {
            status: 404,
        }
       )
    }

}