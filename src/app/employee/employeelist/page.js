'use client' // here use clinet is use to make this client side rendering as nextjs provide SSR by default

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {

    const [employee, setEmployee] = useState([]);

    //creating a function to get the data of the employee is is present in dataBase

    console.log(employee)

    //getEmployee
    const getEmployeeList = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee`, {
                method: 'GET',
            })

            const data = await res.json();
            setEmployee(data);
        } catch (error) {
            console.log(error);
        }
    }

    //deleteEmployee

    const deleteEmployee = async (_id) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/employee/${_id}`,
      {
        method : 'DELETE'
      })

      const data = await res.json();
      
      const {message, error} = data

      if(error){
        alert(error)
      } else {
        alert(message)
      }
      getEmployeeList();
    }


    useEffect(() => {
        getEmployeeList();
    }, []);

    return (
        <div className=' flex justify-center items-center h-screen bg-slate-200'>

            <div className="flex flex-col bg-gray-50">


                <div className="-m-1.5 overflow-x-auto">

                    <div className="p-1.5 min-w-full inline-block align-middle">

                        <div className="border rounded-lg shadow overflow-hidden ">

                            <div className="p-2 bg-gray-50 border-b flex gap-2 items-center">

                                <Link href='/'>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </Link>

                                <h1 className=' text-center text-2xl font-semibold'>
                                    Employee Details List
                                </h1>
                            </div>
                            {/* Table  */}
                            <table className=" w-full divide-y divide-gray-200 ">
                                {/* Thead  */}
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        {/* S.No. */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            S.No.
                                        </th>
                                        {/* Employee Name */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Employee Name
                                        </th>
                                        {/* Email */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>
                                        {/* Exp-Stack  */}
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Exp-Stack
                                        </th> */}
                                        {/* Salary */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Salary
                                        </th>
                                        {/* exp ctc */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Expected CTC
                                        </th>
                                        {/* Selected/Rejected */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Selected/Rejected
                                        </th>
                                        {/* Notice Period */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Notice Period
                                        </th>
                                        {/* Action  */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                        {/* Action */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase "
                                        > Action
                                        </th>
                                    </tr>
                                </thead>
                                {employee.map((item, index) => {

                                    const {_id, name, email, salary, expectedSalary,selectedRejected, noticePeriod} = item
                                    return (
                                        <tbody key={index} className="divide-y divide-gray-200">
                                            <tr>
                                                {/* S.No  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 "> 
                                                {index + 1 }.
                                                </td>
                                                {/* Name  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 "> 
                                                {name}
                                                </td>
                                                {/* Email  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                     {email}
                                                </td>
                                                {/* stack  */}
                                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "> 2.3yr/FE
                                            </td> */}
                                                {/* Salary  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "> 
                                                {salary}
                                                </td>
                                                {/* Exp -Salary  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "> 
                                                {expectedSalary}
                                                </td>
                                                {/* Selected/Rejected  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "> 
                                                {selectedRejected}
                                                </td>
                                                {/* Notice Period  */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "> 
                                                {noticePeriod}
                                                </td>
                                                {/* Edit Button */}
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={_id} className="text-green-600">Edit
                                                    </Link>

                                                </td>
                                                {/* Delete Button */}
                                                <td 
                                                onClick={() => deleteEmployee(_id)}
                                                className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="text-red-600 cursor-pointer " >Delete
                                                    </div>

                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;