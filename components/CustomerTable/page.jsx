"use client";
import { useEffect, useState } from "react";

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        setLoading(true); // Show loader before fetching data
        // const response = await fetch("http://localhost:3000/api/customer");
        const response = await fetch(
          "https://waterpurifier-oq62gyy8g-bhavikt5s-projects.vercel.app/api/customer"
        );
        const data = await response.json();
        setCustomers(data.result);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      } finally {
        setLoading(false); // Hide loader after fetching is complete
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Data</h1>
      {loading ? (
        <div className="flex justify-center items-center h-20">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 border-opacity-50"></div>
          <span className="ml-4 text-gray-500">Loading...</span>
        </div>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id} className="text-center">
                <td className="border border-gray-300 p-2">{customer.name}</td>
                <td className="border border-gray-300 p-2">{customer.email}</td>
                <td className="border border-gray-300 p-2">
                  {customer.number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
