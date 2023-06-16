import { createSlice } from "@reduxjs/toolkit";

const Student = [
    {Name: "John",Age: "24",Course: "MERN",Batch: "October" ,id:"0"},
    {Name: "Doe",Age: "25",Course: "MERN",Batch: "November" ,id:"1"},
    {Name: "Biden",Age: "26",Course: "MERN",Batch: "September", id:"2"},
    {Name: "Barar",Age: "22",Course: "MERN",Batch: "September", id:"3"},
    {Name: "Christ",Age: 23,Course: "MERN",Batch: "October", id:"4"},
    {Name: "Elent",Age: 24,Course: "MERN",Batch: "November", id:"5"},
]
const StudentDataSlice = createSlice({
  name: "users",
  initialState:Student,
  reducers: {
    studentAdded(state, action) {
      state.push(action.payload)
    },
    studentUpdated(state, action) {
      const { id, Name, Age, Course, Batch } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.Name = Name
        existingUser.Age = Age
        existingUser.Course = Course
        existingUser.Batch = Batch
      }
    },
  },
})
export const { studentAdded, studentUpdated } = StudentDataSlice.actions
export default StudentDataSlice.reducer