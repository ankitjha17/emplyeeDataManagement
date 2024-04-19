"use client" // use client 👉 For Client Component

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const EditEmployee = ({ params }) => {


    // Create Router 
    const router = useRouter()

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        expectedSalary: "",
        selectedRejected: "",
        noticePeriod: "",
    });


    const { employeeId } = params;

    const getSingleEmployeeById = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee/${employeeId}`,
                {
                    method: 'GET'
                });

            const data = await res.json();
            console.log(data)
            setEmployee({
                name : data.getSingleEmployee.name,
                email : data.getSingleEmployee.email,
                salary : data.getSingleEmployee.salary,
                expectedSalary: data.getSingleEmployee.expectedSalary,
                selectedRejected : data.getSingleEmployee.selectedRejected,
                noticePeriod : data.getSingleEmployee.noticePeriod,
            });

        } catch (error) {
            console.log(error);
        }
    }

    const updateEmployee = async () => {
        const res = await 
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee/${employeeId}`, {
            method : 'PUT',
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify({
                name : employee.name,
                email : employee.email,
                salary : employee.salary,
                expectedSalary : employee.expectedSalary,
                selectedRejected : employee.selectedRejected,
                noticePeriod : employee.noticePeriod,
            })
        })

        const data = await  res.json();
        console.log(data);

        const {message, error} = data;
        if(error){
             alert(error)
        } else {
            alert(message)
            router.push('/employee/employeelist')
        }
    }


    useEffect(() => {
        getSingleEmployeeById();
    }, [employeeId])

    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form shadow-md border border-gray-400 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* link  */}
                        <Link href='/employee/employeelist'>
                            {/* Svg icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* text  */}
                        <h1 className='text-2xl font-semibold'>Edit Employee Detail</h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom">
                    {/* Employee Name Input   */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeName'
                            placeholder='Enter name'
                            value={employee.name}
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    name: e.target.value
                                })
                            }}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Employee Email Input  */}
                    <div className="">
                        <input
                            type="email"
                            name='employeeEmail'
                            placeholder='Enter email'
                            value={employee.email}
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    email: e.target.value
                                })
                            }}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Employee Salary Input  */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeSalary'
                            placeholder='Enter salary'
                            value={employee.salary}
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    salary: e.target.value
                                })
                            }}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Expected Salary Input  */}
                    <div className="">
                        <input
                            type="text"
                            name='ExceptedSalary'
                            placeholder='Excepted Salary'
                            value={employee.expectedSalary}
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    expectedSalary: e.target.value
                                })
                            }}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>

                    {/* Selected/Rejected  */}
                    <div className="">
                        <input
                            type="text"
                            name='selectedRejected'
                            placeholder='Selected/Rejected'
                            value={employee.selectedRejected}
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    selectedRejected: e.target.value
                                })
                            }}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>



                    {/* Notice Period  */}
                    <div className="">
                        <input
                            type="text"
                            name='selectedRejected'
                            placeholder='Notice Period'
                            value={employee.noticePeriod}
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    noticePeriod: e.target.value
                                })
                            }}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
                        />
                    </div>

                    {/* Update Button  */}
                    <div>
                        <button onClick={updateEmployee} className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>Edit Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditEmployee;