import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login/Login'
import Admission from '../../screens/admission/Admission'
import AdminDashboard from '../../screens/admin-dashboard/AdminDashboard'
import StudentDashboard from '../../screens/student-dashboard/StudentDashboard'

const RouterConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Login />} />
                <Route path='admission' element= {<Admission />} />
                <Route path='admin' element= {< AdminDashboard/>} />
                <Route path='student' element= {< StudentDashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterConfig
