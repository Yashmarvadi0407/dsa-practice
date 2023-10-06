"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { adduser } from "../store/actions/userformaction";
import { useDispatch } from "react-redux";

const Student = () => {
  type Formdata = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    radio: string;
  };

  const { register, control, reset, handleSubmit } = useForm<Formdata>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      radio: "",
    },
  });
  const dispatch = useDispatch();

  const onsubmit = (data: Formdata) => {
    console.log("data", data);
    dispatch(adduser(data));
    reset();
  };

  return (
    <>
      <h1> This is user Form</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          {...register("firstName", { required: true })}
          placeholder="firstName"
        />
        <br /> <br />
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
        <br /> <br />
        <input {...register("email", { required: true })} placeholder="email" />
        <br /> <br />
        <input
          {...register("password", { required: true })}
          placeholder="password"
        />
        <br /> <br />
        <label></label>
        <label>
          <input {...register("radio")} type="radio" value="A" />
          Option A
        </label>
        <br />
        <label>
          <input {...register("radio")} type="radio" value="B" />
          Option B
        </label>
        <br />
        <label>
          <input {...register("radio")} type="radio" value="C" />
          option C
        </label>
        <br /> <br />
        <button type="submit"> Submit</button>
        <DevTool control={control} />
      </form>
    </>
  );
};

export default Student;
