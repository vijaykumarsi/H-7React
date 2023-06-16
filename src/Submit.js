import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { studentAdded } from './StudentDataSlice';
import { useSelector ,useDispatch } from 'react-redux'


function Submit() {
  const data=useSelector((state)=>state.student);
  const Navi=useNavigate();

  const[Name,setName]=useState("");
  const[Age,setAge]=useState("");
  const[Course,setCourse]=useState("");
  const[Batch,setBatch]=useState("");
  const dispatch=useDispatch();

  const handleSubmit =()=>{
    if(Name && Age && Course && Batch){
      dispatch(studentAdded({
          
          'Name':Name,
          'Age':Age,
          'Course':Course,
          'Batch':Batch,
          'id':data.length,
  
      }))
  }
    Navi(-1)
  }

  return (
    <>
    <div className='updatebox'>
    <input name='Name' placeholder='Enter Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
    <input  name='Age' placeholder='Enter Age' value={Age} onChange={(e)=>setAge(e.target.value)}/><br/>
    <input  name='Course' placeholder='Enter Course' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
    <input  name='Batch' placeholder='Enter Batch' value={Batch} onChange={(e)=>setBatch(e.target.value)}/><br/>
    </div>
    <div className='buttons'>
      <button onClick={()=>{Navi('/Students')}}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default Submit