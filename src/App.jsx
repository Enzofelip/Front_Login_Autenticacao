import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/Navbar'

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar/>
        <Outlet/>
      </UserProvider>
    </div>
  )
}

export default App
