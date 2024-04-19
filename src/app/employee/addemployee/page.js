"use client" // use client 👉 For Client Component

import Link from 'next/link';
import React, { useState } from 'react';


const AddEmployee = () => {

    //creating a state

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        expectedSalary: "",
        selectedRejected: "",
        noticePeriod: "",

    });

    const addEmployeeDetail = async () => { 
        try {
            
            const res = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: employee.name,
                    email: employee.email,
                    salary: employee.salary,
                    expectedSalary: employee.expectedSalary,
                    selectedRejected: employee.selectedRejected,
                    noticePeriod: employee.noticePeriod,
                })
            })

            //converting data into json
            const data = await res.json();

            //destructure data
            const { message, error } = data;

            //condition 
            if (error) {
                alert(error);
            } else {
                alert(message);
                setEmployee({
                    name: "",
                    email: "",
                    salary: "",
                    expectedSalary: "",
                    selectedRejected: "",
                    noticePeriod: "",
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' container mx-auto flex justify-center items-center h-screen bg-slate-200 '>
            {/* Main  */}
            <div className="form border shadow-md border-gray-400 rounded-xl  bg-gray-400 py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* Link  */}
                        <Link href='/'>
                            {/* Svg Icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* Text  */}
                        <h1 className='text-2xl font-semibold'>
                            Add Employee Detail
                        </h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom">

                    {/* Employee Name Input  */}
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

                    {/* Stack   */}
                    {/* <div className="">
                        <input
                            type="email"
                            name='employeeStack'
                            placeholder='Stack'
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div> */}

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

                    {/* Employee Expected Salary */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeAddress'
                            placeholder='Expected Salary'
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
                            type="email"
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
                    {/* Employee Np */}
                    <div className="">
                        <input
                            type="text"
                            name='employeeAddress'
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
                    {/* Add Button  */}
                    <div>
                        <button
                        onClick={addEmployeeDetail}
                            className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>
                            Add Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;