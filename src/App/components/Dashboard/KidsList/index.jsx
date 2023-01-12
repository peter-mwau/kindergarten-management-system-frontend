import {
  EyeIcon,
  EyeSlashIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyKids() {
  const [loading, setLoading] = useState(false);

  const [teacher,setTeacher] = useState({});
  
  const navigate = useNavigate();
  const token = localStorage.getItem("teacherToken")
  const teacher_id = localStorage.getItem("teacher");
const id = parseInt(teacher_id)
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(()=>{
    axios.get(`http://localhost:3000/teachers/${id}`,config).then(res=>setTeacher(res))

  },[])
 const data = JSON.parse(localStorage.getItem("teacher_data"))
let kidList = data.teacher.classroom.students


  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const url = "http://localhost:3000/students";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
        setLoading(false);
      });
  }, []);

  function handleClick() {
    navigate("/parents_dashboard/my_kids/:id");
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 m-5">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-pink-600">Students</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the studentList in your account including their name,
            title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none ">

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add Student
          </button>
          <Link to="/dashboard/add_kid">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Kid
            </button>
          </Link>
        </div>
      </div>
      {loading ? (
        <p className="mt-5 text-5xl text-center">Loading Children....</p>
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                    <div className="grid grid-cols-5 gap-4">
                      <div
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300  bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        Admission No
                      </div>
                      <div
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                        First Name
                      </div>
                      <div
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                        Second Name
                      </div>
                      <div
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                        Surname
                      </div>
                      <div
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                        Action
                      </div>
                    </div>
                
                  <div className="bg-white w-full">
                    {kidList.map((person, personIdx) => (
                      <div key={person.admission_number} className="w-full grid grid-cols-5 gap-4">
                        <div
                          className={classNames(
                            personIdx !== kidList.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                          )}>
                          {person.admission_number}
                        </div>
                        <div
                          className={classNames(
                            personIdx !== kidList.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                          )}>
                          {person.first_name}
                        </div>
                        <div
                          className={classNames(
                            personIdx !== kidList.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                          )}>
                          {person.second_name}
                        </div>
                        <div
                          className={classNames(
                            personIdx !== kidList.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                          )}>
                          {person.surname}
                        </div>
                        <div
                          className="grid grid-cols-2">
                        <Link to={`${person.id}`}>
                            <button className="border m-2 rounded-xl">
                              <EyeIcon className="inline text-pink-900 h-3" />
                              View
                              <span className="sr-only">, {person.name}</span>
                            </button>
                            </Link>

                          <button className="border m-2 px-2 rounded-xl">
                            <TrashIcon className="inline text-red-600 h-3" />
                            Delete
                            <span className="sr-only">, {person.name}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
               

                <table
                  className="min-w-full border-separate"
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                      >
                        Surname
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                      >
                        Parent Contact
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {students.map((person, personIdx) => (
                    <tr key={person.email}>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {person.first_name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                      >
                        {person.surname}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {person.parentContact}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== students.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                        )}
                      >
                       <button onClick={handleClick}><span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-5 rounded-[16px] p-3">
                          <EyeIcon className="inline text-pink-900 h-5 mx-2"/>
                          View<span className="sr-only">, {person.name}</span>
                        </span></button> 
                        <span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-5 rounded-[16px] p-3">
                          <PencilIcon className="inline text-indigo-900 h-5 mx-2"/>
                          Edit<span className="sr-only">, {person.name}</span>
                        </span>
                        <span className="text-gray-00 hover:text-red-900 border border-gray-600 mx-5 rounded-[16px] p-3">
                          <TrashIcon className="inline text-red-600 h-5 mx-2"/>
                          Delete<span className="sr-only">, {person.name}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
