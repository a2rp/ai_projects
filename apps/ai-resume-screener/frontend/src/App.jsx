import React from 'react'
import ResumeUploader from './resumeUploader'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background_image from "./assets/background_image.png";
import styled from 'styled-components';

const App = () => {
    return (
        <>
            <ResumeUploader />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}

export default App
