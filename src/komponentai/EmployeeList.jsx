import { EmployeeCard } from "./EmployeeCard";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export const EmployeeList = () => {
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users') // Correct API URL for all users
      .then((response) => {
        // Check if response data contains 'users' array
        setGetData(response.data.users); // Access users array
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (<div>Loading data...</div>);
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px"}}>
      {getData?.map((employee) => (
        <EmployeeCard
          key={employee.id} // Add a unique key for each list item
          name={employee.firstName} // Use firstName for employee name
          lastName={employee.lastName} // Use lastName
          age={employee.age} // Use age
        />
      ))}
    </div>
  );
};