import { Typography, Box, Card, Button } from "@mui/material";
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
import UpdateDepartment from "./UpdateDepartment";

export default function DepartmentDetails() {
  const [rows, setRows] = useState([]);
  const [deleteDepartment, setDeleteDepartment] = useState([false]);
  const [updateDepartment, setUpdatedDepartment] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/getDepartment").then((response) => {
      setRows(response.data);
      console.log(response.data);
    });
  }, [deleteDepartment]);

  function handleDelete(departmentId) {
    axios
      .delete("http://localhost:8080/deleteDepartment/" + departmentId)
      .then((response) => {
        console.log(response.data);
        setDeleteDepartment(!deleteDepartment);
        window.location.reload();
      });
  }

  function handleUpdateDepartment(departmentId) {
    const selectedRow = rows.find((row) => row.departmentId === departmentId);
    if (selectedRow) {
      console.log(selectedRow.departmentName);
      setSelectedDepartment(selectedRow.departmentName);
      Navigate("/UpdateDepartment", { state: selectedRow });
    }
  }

  function handleAddDepartment() {
    Navigate("/AddDepartment");
  }

  return (
    <Box
      style={{
        width: "100%",
        maxWidth: 900,
        marginTop: 50,
        padding: 20,
        marginLeft: 300,
      }}
    >
      <Card>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >
          Department Details
          <Button
            onClick={handleAddDepartment}
            style={{
              border: "1px solid #fff",
              backgroundColor: "rgb(56 192 0)",
              color: "white",
              marginLeft: 575,
            }}
          >
            Add
          </Button>
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ mt: 2, maxHeight: 500, overflow: "auto" }}
        >
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Department ID</TableCell>
                <TableCell align="center">Department Name</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.length > 0 ? (
                rows.map((row) => (
                  <TableRow key={row.departmentId}>
                    <TableCell align="center">{row.departmentId}</TableCell>
                    <TableCell align="center">{row.departmentName}</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleDelete(row.departmentId)}
                        style={{
                          border: "1px solid #fff",
                          backgroundColor: "red",
                          color: "white",
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => handleUpdateDepartment(row.departmentId)}
                        style={{
                          border: "1px solid #fff",
                          backgroundColor: "#ffa200",
                          color: "white",
                        }}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {selectedDepartment && (
        <UpdateDepartment selectedDepartment={selectedDepartment} />
      )}
    </Box>
  );
}
