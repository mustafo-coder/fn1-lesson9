import { toast } from "react-toastify"
import { NumericFormat } from 'react-number-format';
import { useState } from "react";

const HomeAboutCard = ({icon, title, body}) => {
  const [dark, setDark] = useState(false);

  const types = ["success", "error", "warning", "info"];
  const clickHandler = ()=>{
    setDark(!dark);
    const randomType = types[Math.random() * types.length | 0];
    switch (randomType) {
      case "success":
        toast.success(title, {theme:"dark"})
        break;
      case "warning":
        toast.warning(title, {theme:"dark"})
        break;
      case "error":
        toast.error(title, {theme:"dark"})
        break;
      case "info":
        toast.info(title, {theme:"dark"})
        break;
    }
  }
  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white"} max-md:p-5 p-10 max-sm:text-center`} onClick={clickHandler}>
      <i className={`fa ${icon} text-[#2405F2] text-3xl`}></i>
      <h3 className="text-2xl max-md:text-xl font-[500] my-3">{title}</h3>
      <p className="text-[#343543] max-md:text-sm">{body}</p>
    </div>
  )
}

export default HomeAboutCard