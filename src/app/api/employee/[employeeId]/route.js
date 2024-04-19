import { Employee } from "@/models/Employee";
import { NextResponse } from "next/server";

//get employee details by employee id
export async function GET(request, { params }) {
    const { employeeId } = params;
    console.log(employeeId, "Id");

    try {
        const getSingleEmployee = await Employee.findById(employeeId);

        return NextResponse.json(
            {
                getSingleEmployee,
            },
            {
                status: 200,
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to get single employee"
            },
            {
                status: 404,
            }
        )
    }
}


//update employee
export async function PUT(request, { params }) {
    const { employeeId } = params;

    //get data from FE

    const {
        name,
        email,
        salary,
        expectedSalary,
        selectedRejected,
        noticePeriod
    } = await request.json();

    try {
        let employee = await Employee.findById(employeeId);
        employee.name = name;
        employee.email = email;
        employee.salary = salary;
        employee.expectedSalary = expectedSalary;
        employee.selectedRejected = selectedRejected;
        employee.noticePeriod = noticePeriod;


        const updatedEmployee = await employee.save();

        return NextResponse.json(
            {
                updatedEmployee,
                message: "Employee Updated Successfully"
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to update employee"
            },
            {
                status: 404,
            }
        )
    }
}

// delete employee

export async function DELETE(request, {params}){
    const {employeeId} = params;

    try {
        await Employee.deleteOne({
            _id : employeeId
        })

        return NextResponse.json(
            {
                message: "Employee deleted successfully"
            },
            {
                status : 201,
            }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: "Failed to delete employee",
            },
            {
                status: 404,
            }
        )
    }
}