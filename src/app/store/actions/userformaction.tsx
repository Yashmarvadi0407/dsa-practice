import { ADDUSER } from "../costant";

type Formdata = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  radio: string;
};

export const adduser = (data: Formdata) => {
  console.log("add user action");
//   debugger;
  return {
    type: ADDUSER,
    payload: data,
  };
};
