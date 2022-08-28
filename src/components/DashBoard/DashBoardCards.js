import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
export default function SimplePaper({ graphData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 250,
          marginBottom: 10,
        },
      }}
    >
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#F9F9F9",
          height: 200,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                padding: "5px 0px",
                color: "#2e3b55",
              }}
            >
              Hit Rate
            </div>
            <div
              style={{
                fontSize: "25px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "#2e3b55",
              }}
            >
              {graphData?.currentCount}
            </div>
            <div
              style={{
                display: "flex",
                padding: "5px 0px",
                fontFamily: "sans-serif",
                justifyContent: "center",
              }}
            >
              {graphData?.percentage
                ? `+ ${Math.round(graphData?.percentage)}%`
                : `- ${Math.round(graphData?.percentage)}%`}
            </div>
          </div>
          {graphData?.percentage ? (
            <KeyboardDoubleArrowUpIcon
              sx={{ color: "green", height: "60px", width: "60px" }}
            />
          ) : (
            <KeyboardDoubleArrowDownIcon
              sx={{ color: "red", height: "60px", width: "60px" }}
            />
          )}
        </div>
      </Paper>

      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#F9F9F9",
          color: "#2e3b55",
          fontWeight: "bold",
          height: 250,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ElectricBoltIcon sx={{ marginRight: 1, fill: "#057193" }} /> Trending
          Keywords
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "sans-serif",
            marginTop: "10px",
            fontWeight: "normal",
          }}
        >
          {graphData?.trendData?.map((item, index) => (
            <div
              style={{
                display: "flex",
                fontFamily: "sans-serif",
                marginTop: "10px",
                fontWeight: "normal",
              }}
            >
              <CallMadeRoundedIcon sx={{ width: 15, marginRight: 2 }} />
              {`${item.tag} : ${item.count}`}
            </div>
          ))}
        </div>
      </Paper>
    </Box>
  );
}
