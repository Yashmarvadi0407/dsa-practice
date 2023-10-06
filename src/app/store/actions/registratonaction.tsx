import { REGISTRATION } from "../costant";

type Formdata = {
  firstName: string;
  lastName: string;
  email: string;
  role: String;
};

export const registratonaction = (data: Formdata) => {
  console.log("registraion user");
  return {
    type: REGISTRATION,
    payload: data,
  };
};
