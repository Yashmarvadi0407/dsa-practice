"use client";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./store";
import Student from "./component/Student";
import Registraton from "./component/Registraton";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        {/* <Link href="/dashboard/student"> Go to student page</Link>
        <br />
        <Link href="/dashboard/teacher"> Go to teacher page</Link> */}
        <Student />
       
      </Provider>
    </>
  );
}
