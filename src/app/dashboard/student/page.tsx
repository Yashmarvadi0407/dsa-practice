"use client";

import Student from "@/app/component/Student";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";
import store from "@/app/store";

export default function page() {
  //useRouter()
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <Student />
        <br />
        <button
          type="button"
          onClick={() => {
            router.push("/");
          }}
        >
          Dashboard
        </button>
        {/* <Link href="/"> Back</Link> */}
      </Provider>
    </>
  );
}
