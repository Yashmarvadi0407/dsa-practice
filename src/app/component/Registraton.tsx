"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registratonaction } from "../store/actions/registratonaction";
import { useDispatch } from "react-redux";
const Registraton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  type Formdata = {
    firstName: string;
    lastName: string;
    email: string;
    role: String;
  };

  const { register, control, handleSubmit, reset } = useForm<Formdata>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  });
  const submitHan = (data: Formdata) => {
    console.log("clg", data);
    dispatch(registratonaction(data));
    reset();
  };

  return (
    <>
    <center>
      <form onSubmit={handleSubmit(submitHan)}>
        <h1>Registration</h1>
        <input
          {...register("firstName", { required: true })}
          placeholder="FirstName"
        />
        <br />
        <br />
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
        <br />
        <br />
        <input {...register("email", { required: true })} placeholder="email" />
        <br />
        <br />
        <input {...register("role", { required: true })} placeholder="role" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Back to Dashboard
      </button>
      </center>
    </>
  );
};

export default Registraton;
