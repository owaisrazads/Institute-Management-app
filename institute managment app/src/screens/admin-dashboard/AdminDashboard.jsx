import React from 'react'
import AllCourse from './allcourse/Allcourse'
import AddCourse from './addcourse/Addcourse'
import AllStudent from './allstudents/Allstudent'
import SingleCourse from './singlecourse/SingleCourse'
import { Route, Routes  } from 'react-router-dom'
import PersistentDrawerLeft from '../../components/Drawer'
import { Box, Button } from '@mui/material'


const AdminDashboard = () => {

  // react router navigate hook
 

  return (
    <>
    <PersistentDrawerLeft screen={
      <Box>
        {/* <Box className='d-flex justify-content-around'>
          <Button onClick={()=> navigate('/admin')} variant="contained">AddCourse</Button>
          <Button variant="contained" onClick={()=> navigate('/admin/allcourse')}>AllCourse</Button>
          <Button variant="contained" onClick={()=> navigate('/admin/allstudents')}>AllStudents</Button>
          <Button variant="contained" onClick={()=> navigate('/admin/singlecourse')}>SingleCourse</Button>
        </Box> */}
 
        <Routes>
          <Route path='/' element={<AddCourse />} />
          <Route path='/allcourse' element={<AllCourse />} />
          <Route path='/allstudents' element={<AllStudent />} />
          <Route path='/singlecourse' element={<SingleCourse />} />

        </Routes>
      </Box>
    } />
  </>
)
}


export default AdminDashboard

      