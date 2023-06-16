import { configureStore } from "@reduxjs/toolkit"
import StudentDataSlice from "./StudentDataSlice"
export default configureStore({
  reducer: {
    student: StudentDataSlice,
  },
})