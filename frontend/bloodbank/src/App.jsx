import { useState } from 'react'
import { ToastContainer, Zoom } from 'react-toastify'
import AppRouter from './router/AppRouter'
import axios from 'axios'

function App() {

  axios.defaults.baseURL = "http://localhost:3000"

  const [count, setCount] = useState(0)

  return (
    <div>
      <AppRouter/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  )
}

export default App
