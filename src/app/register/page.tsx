"use client";
import Registraton from "@/app/component/Registraton";
import store from "@/app/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <>
      <Provider store={store}>
        <Registraton />
      </Provider>
    </>
  );
};

export default page;
