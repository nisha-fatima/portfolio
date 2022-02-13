import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
export default function Toast() {
    const notify = () =>
        toast.dark('Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
  return (
    <div>
      <button onClick={notify}>Notify !</button>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
        />
    </div>
  );
}
  