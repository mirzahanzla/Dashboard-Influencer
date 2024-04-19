import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status,Information,Comments) {
  return { name, trackingId, date, status,Information,Comments };
}

const rows = [
  createData("Levis", 1389024, "22 March 2024", "Approved"),
  createData("Polo ", 1589424, "22 March 2024", "Progress"),
  createData("Outfiters", 1689024, "22 March 2024", "Approved"),
  createData("Clothes", 1289021, "22 March 2024", "Delivered"),
  createData("Shoes", 1989021, "22 March 2024", "Pending"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      // background: 'rgb(145 254 159 / 47%)',
      color: 'rgb(145 254 159 )',
    }
  }
  else if(status === 'Pending')
  {
    return{
      // background: '#ffadad8f',
      color: 'red',
    }
  }
  else if(status === 'Progress')
  {
    return{
      // background: '#D8DE86',
      color: 'yellow',
    }
  }
  else{
    return{
      // background: '#59bfff',
      color: 'blue',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Recent Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Information</TableCell>
                <TableCell align="left">Query</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                  <TableCell align="left" className="Comment">Comment</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
