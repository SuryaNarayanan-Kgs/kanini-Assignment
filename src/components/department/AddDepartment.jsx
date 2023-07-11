import {
  Container,
  Typography,
  Card,
  Box,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function AddDepartment() {
  const [values, Setvalues] = useState();
  const navigate = useNavigate();

  const body = {
    departmentName: values,
  };

  function handleSubmit() {
    axios.post("http://localhost:8080/AddDepartment", body).then((response) => {
      console.log(response.data);
      navigate("/DepartmentDetails");
    });
  }
  return (
    <Container maxWidth="sm" style={{ marginTop: 200 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Card
          sx={{
            width: "100%",
            backgroundColor: "aliceblue",
            maxWidth: 500,
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
            ADD DEPARTMENT
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter Department"
            variant="outlined"
            margin="normal"
            value={values}
            onChange={(e) => {
              Setvalues(e.target.value);
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
            Submit
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
