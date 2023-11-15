import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <center>
        <Link href="/dashboard/student"> Go to Student page</Link>
        <br />
        <br />
        <Link href="/dashboard/teacher"> Go to Teacher page</Link>
        <br />
        <br />
        <Link href="/register"> Go to Sing In</Link>
      </center>
    </>
  );
};

export default Dashboard;
