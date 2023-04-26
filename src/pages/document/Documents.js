import Header from "../../components/header/Header";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
  createData(
    "Lorem ipsum dolor enet",
    "6.23 Mb",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM",
    "04/14/ 2023 03:39:36 AM"
  ),
];
const Documents = () => {
  return (
    <Header>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <StyledTableCell> */}
              <th>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 68,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Name
                </Box>
              </th>
              <th>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 68,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Size
                </Box>
              </th>

              <th>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 68,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Created
                </Box>
              </th>

              <th>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 68,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Modified
                </Box>
              </th>

              <th>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 68,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Accessed
                </Box>
              </th>

              <th>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 68,
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  Actions
                </Box>
              </th>

              {/* </StyledTableCell> */}
              {/* <StyledTableCell align="right"></StyledTableCell> */}
              {/* <StyledTableCell align="right"></StyledTableCell> */}
              {/* <StyledTableCell align="right"></StyledTableCell> */}
              {/* <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    {row.name}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <Box
                    sx={{
                      fontFamily: "Lato",
                      fontWeight: 700,
                      fontSize: 16,
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      View
                    </span>

                    <span
                      style={{
                        marginLeft: 30,
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#20A7E1",
                      }}
                    >
                      Edit
                    </span>

                    <span
                      style={{
                        marginLeft: 30,
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#E94F1E",
                      }}
                    >
                      Delete
                    </span>

                    <span
                      style={{
                        marginLeft: 30,
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#10B981",
                      }}
                    >
                      Chat with Bot
                    </span>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Header>
  );
};

export default Documents;
