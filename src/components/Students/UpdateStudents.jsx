import { Box, Card, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function () {
  const [studentName, setStudentName] = useState();
  const [percentage, setPercentage] = useState();
  const [course, setCourse] = useState();
  const [specialization, setSpecialization] = useState();
  const [departmentId, setDepartmentId] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [updatedValues, setUpdatesValues] = useState({
    studentName: data.student_name,
    course: data.course,
    specialization: data.specialization,
    departmentId: data.department_ID,
    percentage: data.percentage,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatesValues({ ...updatedValues, [name]: value });
  }

  function handleUpdate() {
    axios
      .put(
        "http://localhost:8080/updateStudent/" + data?.student_ID,
        updatedValues
      )
      .then((response) => {
        console.log(response.data);
        navigate("/StudentsDetails");
      });
  }
  return (
    <Box
      style={{
        marginTop: 50,
        marginLeft: 270,
        height: 600,
        padding: 3,
      }}
    >
      <Card
        style={{
          maxWidth: 500,
          marginLeft: 270,
          height: 600,
          background: "aliceblue",
        }}
      >
        <Typography
          style={{ color: "black" }}
          variant="h5"
          component="h2"
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          UPDATE STUDENTS HERE
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter Student Name"
          variant="outlined"
          margin="normal"
          name="studentName"
          defaultValue={data.student_name}
          onChange={(e) => handleChange(e)}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Course"
          variant="outlined"
          margin="normal"
          name="course"
          defaultValue={data.course}
          onChange={(e) => handleChange(e)}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Percentage"
          variant="outlined"
          margin="normal"
          name="percentage"
          defaultValue={data.percentage}
          onChange={(e) => handleChange(e)}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Specialization"
          variant="outlined"
          margin="normal"
          name="specialization"
          defaultValue={data?.specialization}
          onChange={(e) => handleChange(e)}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Department Id"
          variant="outlined"
          margin="normal"
          name="department Name"
          defaultValue={data?.department_ID}
          onChange={(e) => handleChange(e)}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "50%",
            mt: 4,
            mx: "auto",
            marginLeft: "25%",
            marginTop: "10px",
          }}
          onClick={handleUpdate}
        >
          UPDATE
        </Button>
      </Card>
    </Box>
  );
}
