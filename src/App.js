import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
// import Department from './components/department/Department';
import AddDepartment from './components/department/AddDepartment';
import DepartmentDetails from './components/department/DepartmentDetails';
import UpdateDepartment from './components/department/UpdateDepartment';
import StudentsDetails from './components/Students/StudentsDetails';
import AddStudents from './components/Students/AddStudents';
import UpdateStudents from './components/Students/UpdateStudents';
function App() {
  return (
    <div className="App">
      {/* <Department /> */}
      {/* <AddDepartment /> */}
      {/* <DepartmentDetails /> */}
      {/* <UpdateDepartment /> */}
      {/* <Students /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/DepartmentDetails" />}></Route> */}
          {/* <Route path="/DepartmentDetails" element={<DepartmentDetails />} />
          <Route path="/AddDepartment" element={<AddDepartment />} />
          <Route path="/UpdateDepartment" element={<UpdateDepartment />} /> */}
          <Route path="/" element={<Navigate to="/StudentsDetails" />}></Route>
          <Route path="/StudentsDetails" element={<StudentsDetails />} />
          <Route path="/AddStudents" element={<AddStudents />} />
          <Route path="/UpdateStudents" element={<UpdateStudents />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
