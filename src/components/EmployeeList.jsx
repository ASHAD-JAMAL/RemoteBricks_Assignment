import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/employeeSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.employees);

  useEffect(() => {
    // Dispatching the fetchEmployees thunk to fetch data from API
    dispatch(fetchEmployees());
  }, [dispatch]);

  console.log("Employee List:", list);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Employee List
      </h1>
      {status === "loading" && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 border-b-4 border-transparent"></div>
        </div>
      )}
      {status === "failed" && (
        <div className="bg-red-500 text-white text-center p-4 rounded-md mb-4">
          <p>Error: {error}</p>
        </div>
      )}
      {status === "succeeded" && list.length === 0 && (
        <p className="text-center text-gray-500 text-xl">No employees found.</p>
      )}

      {status === "succeeded" && list.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((employee) => (
            <div
              key={employee.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {employee.name}
              </h2>
              <p className="text-gray-600">
                Capacity: {employee.data?.capacity || employee.data?.Capacity}
              </p>
              <p className="text-gray-600">ID: {employee.id}</p>
              <div className="mt-4">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
