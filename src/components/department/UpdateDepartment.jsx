import { Typography, Box, Card, Button, TextField } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function UpdateDepartment({ selectedDepartment }) {
  const location = useLocation();
  const data = location.state;
  const [updatedValues, setUpdatesValues] = useState([]);
  const Navigate = useNavigate();

  function handleChange(e) {
    setUpdatesValues(e.target.value);
  }
  function handleUpdate() {
    const body = {
      departmentName: updatedValues,
    };
    axios
      .put("http://localhost:8080/updateDepartment/" + data?.departmentId, body)
      .then((response) => {
        console.log(response.data);
        Navigate("/DepartmentDetails");
      });
  }
  return (
    <Box
      style={{
        background: "aliceblue",
        width: 500,
        height: 200,
        padding: 20,
        marginTop: 150,
        marginLeft: 500,
        borderRadius: 10,
      }}
    >
      <Card
        style={{
          width: 500,
          height: 200,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mt: 3,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Enter Here To Update The department
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter New Department"
          variant="outlined"
          margin="normal"
          defaultValue={data?.departmentName}
          onChange={(e) => handleChange(e)}
          sx={{ width: "90%", mx: "auto", marginLeft: "5%" }}
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
          Update
        </Button>
      </Card>
    </Box>
  );
}
