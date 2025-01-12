"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = { name, email, number };
    let response = await fetch("http://localhost:3000/api/customer", {
      method: "Post",
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center px-10 gap-3 "
        onSubmit={submitForm}
      >
        <h1 className="font-bold text-4xl mb-4">Create Customer</h1>
        <input
          type="text"
          placeholder="Name"
          className="p-3 shadow-sm rounded border-2 w-1/2"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3  shadow-sm rounded border-2 w-1/2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Number"
          className="p-3  shadow-sm rounded border-2 w-1/2"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
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
