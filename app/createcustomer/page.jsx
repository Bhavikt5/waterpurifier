"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();

  const submitForm = async (e) => {
    e.preventDefault();

    const data = { name, email, number };

    try {
      const response = await fetch(
        "https://waterpurifier.vercel.app/api/customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // const response = await fetch("http://localhost:3000/api/customer", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center px-10 gap-3"
        onSubmit={submitForm}
      >
        <h1 className="font-bold text-4xl mb-4">Create Customer</h1>

        <label className="w-1/2 text-left mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="p-3 shadow-sm rounded border-2 w-1/2"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label className="w-1/2 text-left mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="p-3 shadow-sm rounded border-2 w-1/2"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="w-1/2 text-left mb-1" htmlFor="number">
          Phone Number
        </label>
        <input
          id="number"
          type="number"
          placeholder="Number"
          className="p-3 shadow-sm rounded border-2 w-1/2"
          required
          onChange={(e) => setNumber(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-800 text-white text-lg hover:bg-blue-500 ease-in duration-100 w-1/2 p-3 rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default page;
