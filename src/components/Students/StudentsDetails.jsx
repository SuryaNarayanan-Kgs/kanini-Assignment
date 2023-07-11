import { Box, Card, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const [rows, setRows] = useState([]);
  const [deleteStudents, setDeleteStudents] = useState(false);
  const [selectedStudents, setSelectedStudent] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/GetAllStudents").then((response) => {
      setRows(response.data);
      console.log(response.data);
    });
  }, [deleteStudents]);

  function handleDeleteStudent(student_ID) {
    axios
      .delete("http://localhost:8080/deleteStudent/" + student_ID)
      .then((response) => {
        setDeleteStudents(!deleteStudents);
        console.log(response.data);
      });
  }

  function handleUpdate(studentID) {
    const selectedRow = rows.find((row) => row.studentID === studentID);
    if (selectedRow) {
      console.log(selectedRow.departmentId);
      setSelectedStudent(selectedRow.studentName);
      Navigate("/UpdateStudents", { state: selectedRow });
    }
  }

  function handleAddStudents() {
    Navigate("/AddStudents");
  }

  return (
    <Box
      style={{
        backgroundColor: "black",
        width: 1350,
        height: 600,
        marginLeft: 100,
        marginTop: 70,
        borderRadius: 10,
        padding: 3,
      }}
    >
      <Card
        style={{
          backgroundColor: "white",
          width: 1350,
          height: 600,
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
          STUDENTS DETAILS
          <Button
            onClick={handleAddStudents}
            style={{
              border: "1px solid #fff",
              backgroundColor: "rgb(56 192 0)",
              color: "white",
              marginLeft: 1000,
            }}
          >
            ADD{" "}
          </Button>
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ mt: 2, maxHeight: 500, overflow: "auto" }}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">student ID</TableCell>
                <TableCell align="center">student Name</TableCell>
                <TableCell align="center">Course</TableCell>
                <TableCell align="center">Specialization</TableCell>
                <TableCell align="center">Percentage</TableCell>
                <TableCell align="center">Department Name</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.length > 0 ? (
                rows.map((row) => (
                  <TableRow key={row.studentID}>
                    <TableCell align="center">{row.student_ID}</TableCell>
                    <TableCell align="center">{row.student_name}</TableCell>
                    <TableCell align="center">{row.course}</TableCell>
                    <TableCell align="center">{row.specialization}</TableCell>
                    <TableCell align="center">{row.percentage}</TableCell>
                    <TableCell align="center">{row.department_name}</TableCell>
                    <TableCell align="center">
                      <Button
                        style={{
                          border: "1px solid #fff",
                          backgroundColor: "red",
                          color: "white",
                        }}
                        onClick={() => handleDeleteStudent(row.student_ID)}
                      >
                        Delete
                      </Button>
                      <Button
                        style={{
                          border: "1px solid #fff",
                          backgroundColor: "",
                          backgroundColor: "#ffa200",
                          color: "white",
                        }}
                        onClick={() => handleUpdate(row.studentID)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
