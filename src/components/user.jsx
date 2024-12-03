import React from "react";
import { toast } from "react-toastify";

const User = ({ user }) => {
  console.log(user);
  
  const clickHandler = () => toast.success(user.lastname, {theme: "dark"});
  return (
    <h1 onClick={clickHandler} className="p-10 text-3xl bg-red-500 text-white mt-5">
      {user.firstname}
    </h1>
  );
};

export default User;
