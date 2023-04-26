import { Box } from "@mui/material";
import React from "react";

const Document = () => {
  return (
    <Box
      mt={2}
      mx={8}
      sx={{
        background: "rgba(0, 0, 0, 0.05)",
        // color: "#0A8E63",
        fontFamily: "Lato",
        fontWeight: 700,
        fontSize: 24,
        height: 88,
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        borderRadius: 2,
      }}
    >
      <div
        style={{
          marginLeft: 20,
          background: "white",
          fontFamily: "Lato",
          height: 26,
          width: 26,
          borderRadius: 4,
          border: "1px solid rgba(0, 0, 0, 0.2)",
        }}
      ></div>
      <span
        style={{
          marginLeft: 40,
          fontFamily: "Lato",
          fontWeight: 500,
          fontSize: 20,
        }}
      >
        Lorem ipsum dolor enet
      </span>

      <span
        style={{
          marginLeft: 690,
          fontFamily: "Lato",
          fontWeight: 500,
          fontSize: 20,
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
          fontSize: 20,
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
          fontSize: 20,
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
          fontSize: 20,
          color: "#10B981",
        }}
      >
        Chat with Bot
      </span>
    </Box>
  );
};

export default Document;
