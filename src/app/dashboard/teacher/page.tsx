import React from "react";
import Link from "next/link";
import Teacher from "@/app/component/Teacher";
const page = () => {
  return (
    <>
      <Teacher />
      <Link href="/">Back</Link>
    </>
  );
};

export default page;
