"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { registratonaction } from "../store/actions/registratonaction";
import { useDispatch } from "react-redux";
const Registraton = () => {
  const dispatch = useDispatch();
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
    </>
  );
};

export default Registraton;
