import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";
import { evaluate } from "mathjs";

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (val) => {
    setInputValue(inputValue + val);
  };
  const clear = () => {
    setInputValue("");
  };
  const clearlast = () => {
    setInputValue(inputValue.slice(0, -1));
  };
  //using eval
  // const Calculate = () => {
  //     try {
  //       const result = eval(inputValue);
  //       setInputValue(result.toString());
  //     } catch (error) {
  //       setInputValue('Error :' );
  //     }
  // };

  const Calculate = () => {
    try {
      const result = evaluate(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };
  const isInputEmpty = inputValue === "";

  return (
    <Paper
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        padding: "20px",
        minWidth: "300px", // Ensure minimum width to accommodate the content
      }}
    >
      <Typography
        variant="h2"
        sx={{
            fontSize: "24px",
            fontWeight: "bold",	
            marginBottom: "20px",
            marginTop: "10px",
          color: "#dc3545"
          
        }}
      >
        Calculator
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                <TextField variant="outlined" fullWidth value={inputValue} />
              </TableCell>
              <TableCell colSpan={0.5}>
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ minWidth: "40px", padding: "6px" }}
                  onClick={() => {
                    clearlast();
                  }}
                  disabled={isInputEmpty}
                >
                  <CancelIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    clear();
                  }}
                >
                  Clear
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("1");
                  }}
                >
                  1
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("2");
                  }}
                >
                  2
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("3");
                  }}
                >
                  3
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("/");
                  }}
                >
                  /
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("4");
                  }}
                >
                  4
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("5");
                  }}
                >
                  5
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("6");
                  }}
                >
                  6
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("-");
                  }}
                >
                  -
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("7");
                  }}
                >
                  7
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("8");
                  }}
                >
                  8
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("9");
                  }}
                >
                  9
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("+");
                  }}
                >
                  +
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display(".");
                  }}
                >
                  .
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("0");
                  }}
                >
                  0
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    Calculate();
                  }}
                >
                  =
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => {
                    display("*");
                  }}
                >
                  *
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Main;
