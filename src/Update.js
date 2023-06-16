import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { studentUpdated } from './StudentDataSlice';

function Update() {
  const dispatch=useDispatch()
  const Navi=useNavigate();
  const data=useLocation()
  const dataid=data.state;
  const studentDetails=useSelector((state)=>state.student.filter((item)=>item.id === dataid))

  const studentName=studentDetails[0].Name;
  const studentAge=studentDetails[0].Age;
  const studentCourse=studentDetails[0].Course;
  const studentBatch=studentDetails[0].Batch
  const [Name,setName]=useState(studentName)
  const[Age,setAge]=useState(studentAge)
  const[Course,setCourse]=useState(studentCourse)
  const[Batch,setBatch]=useState(studentBatch)

  const handleUpdate=()=>{
    if(Name && Age && Course && Batch){
      dispatch(studentUpdated({
          'Name':Name,
          'Age':Age,
          'Course':Course,
          'Batch':Batch,
          'id':dataid
      }))
      Navi(-1)
  }
  }

  return (
    <>
    <div className='updatebox'>
    <input type='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
    <input type='number' value={Age} onChange={(e)=>setAge(e.target.value)}/><br/>
    <input type='text' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
    <input type='text' value={Batch} onChange={(e)=>setBatch(e.target.value)}/><br/>
    </div>
    <div className='buttons'>
      <button onClick={()=>{Navi('/Students')}} >Cancel</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
    </>
  )
}

export default Update