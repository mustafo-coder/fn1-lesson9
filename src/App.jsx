import { ToastContainer } from "react-toastify"
import Home from "./components/home"
import Navbar from "./components/navbar"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App