import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <center>
        <Link href="/dashboard/student"> Go to student page</Link>
        <br />
        <Link href="/dashboard/teacher"> Go to teacher page</Link>
      </center>
    </div>
  );
};

export default page;
