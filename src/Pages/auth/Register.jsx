import React from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const Register = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[700px] w-full mx-auto  py-5    ">
        <div className="border rounded-xl  mb-5  bg-white ">
          <h1 className="text-3xl py-3 uppercase text-center font-semibold">
            Todo app
          </h1>
        </div>
        <form className="bg-white border rounded px-10 py-5 space-y-4">
          <div>
            <div className="flex items-center justify-center capitalize w-20 h-20 rounded-full font-bold text-xl mx-auto bg-gray-100">
              {" "}
              A{" "}
            </div>
            <p className="text-center capitalize">profile picture</p>
          </div>
          <TextField label="UserName" />
          <TextField label="Email" />
          <TextField label="Password" />
          <TextField label="Verify Password" />
          <Button>register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
