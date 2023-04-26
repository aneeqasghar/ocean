import React from "react";
import Header from "../../components/header/Header";
import { Box, Typography } from "@mui/material";
import pdf from "../../assets/images/pdf-icon.png";
import search from "../../assets/images/search.svg";
import Document from "../../components/document/Document";

const Dashboard = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
      <Header>
        <Typography
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            minHeight: "100vh",
            // marginBottom: 10,
          }}
        >
          <Box
            sx={{
              // minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "46vw",
                height: 450,
                marginTop: 3,
                minHeight: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
                // "&:hover": {
                //   backgroundColor: "primary.main",
                //   opacity: [0.9, 0.8, 0.7],
                // },
              }}
            >
              <img src={pdf} width={165} height={204} />
              <Box
                mt={2}
                sx={{
                  color: "rgba(0, 0, 0, 0.4)",
                  fontFamily: "Lato",
                  fontWeight: 700,
                  fontSize: 48,
                }}
              >
                Upload PDF
              </Box>
              <Box
                mt={2}
                sx={{
                  color: "rgba(0, 0, 0, 0.2)",
                  fontFamily: "Lato",
                  fontWeight: 700,
                  fontSize: 24,
                }}
              >
                Click here here to upload or Drag and Drop the file
              </Box>
            </Box>
          </Box>
          <Box
            mt={2}
            mx={8}
            sx={{
              background: "rgba(16, 185, 129, 0.2)",
              color: "#0A8E63",
              fontFamily: "Lato",
              fontWeight: 700,
              fontSize: 24,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            Recently uploaded documents
          </Box>

          {/* {[
              {k : 1},
              {k : 1},
              {k : 1},
              {k : 1},
              {k : 1},
            ].map((a,key) => { */}
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />

          <Box
            mt={2}
            mx={8}
            sx={{
              background: "rgba(16, 185, 129, 0.2)",
              color: "#0A8E63",
              fontFamily: "Lato",
              fontWeight: 700,
              fontSize: 24,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            Recently uploaded documents
          </Box>

          <Box
            mt={2}
            mx={8}
            sx={{
              background: "rgba(0, 0, 0, 0.05)",
              textTransform: "uppercase",
              color: "rgba(0, 0, 0, 0.4)",
              fontFamily: "Lato",
              // fontWeight: 700,
              fontSize: 24,
              height: 88,
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              borderRadius: 2,
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={search}
              style={{
                marginRight: 30,
                marginLeft: 30,
              }}
            />
            TYPE YOUR FILE NAME HERE
          </Box>

          {/* })} */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <button
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: 10,
              }}
            >
              Search
            </button>
          </Box>
        </Typography>
      </Header>
  );
};

export default Dashboard;
