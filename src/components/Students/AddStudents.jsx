import { Box, Card, TextField, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function () {
  const [student_name, setStudentName] = useState();
  const [percentage, setPercentage] = useState();
  const [course, setCourse] = useState();
  const [specialization, setSepcialization] = useState();
  const [departmentId, setDepartmentId] = useState();
  const navigate = useNavigate();

  const body = {
    studentName: student_name,
    course: course,
    specialization: specialization,
    percentage: percentage,
    departmentId: departmentId,
  };
  function handleSubmit() {
    axios.post("http://localhost:8080/CreateStudent", body).then((response) => {
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
          ADD STUDENTS HERE
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter Student Name"
          variant="outlined"
          margin="normal"
          defaultValue={student_name}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Course"
          variant="outlined"
          margin="normal"
          defaultValue={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Percentage"
          variant="outlined"
          margin="normal"
          defaultValue={percentage}
          onChange={(e) => {
            setPercentage(e.target.value);
          }}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Specialization"
          variant="outlined"
          margin="normal"
          defaultValue={specialization}
          onChange={(e) => {
            setSepcialization(e.target.value);
          }}
          sx={{ width: "90%", mx: "auto", mt: 3, marginLeft: "5%" }}
        />
        <TextField
          id="outlined-basic"
          label="Department Id"
          variant="outlined"
          margin="normal"
          defaultValue={departmentId}
          onChange={(e) => {
            setDepartmentId(e.target.value);
          }}
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
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Card>
    </Box>
  );
}
