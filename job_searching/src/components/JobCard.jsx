import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionSummary } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";

export default function JobDetails() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion onChange={handleChange("panel1")}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              marginTop: "16px",
              justifyContent: "space-evenly"
            }}
          >
            <Typography variant="h6">Shrimp and Chorizo Paella</Typography>
            <FavoriteBorderOutlinedIcon
              sx={{ marginRight: "4px", color: "#3949ab" }}
            />
          </div>
          <div style={{ display: "flex", marginTop: "16px" }}>
            <Typography>September 14, 2016</Typography>
            <BlockOutlinedIcon
              sx={{
                marginRight: "4px",
                color: "#3949ab",
              }}
            />
          </div>
          {!expanded && (
            <Typography
              variant="body"
              color="text.secondary"
              sx={{ width: "80%" }}
            >
              19 days ago
            </Typography>
          )}
        </div>
      </AccordionSummary>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              backgroundColor: "#dcdcdc",
              width: "80%",
              fontWeight: "bold",
            }}
          >
            Rs 40,000 - Rs 50,000 a month
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ width: "80%", marginTop: "16px", fontWeight: "bold" }}
          >
            Requirments
          </Typography>
          <Typography
            variant="body"
            color="text.secondary"
            sx={{ width: "80%", marginTop: "16px" }}
          >
            Construction: 6 years
          </Typography>
          <div style={{ display: "flex", marginTop: "16px" }}>
            <SendIcon sx={{ marginRight: "4px", color: "#3949ab" }} />
            <Typography varient="h4" color="text.secondary" gutterBottom>
              Apply from your phone
            </Typography>
          </div>
          <div style={{ display: "flex", marginTop: "4px" }}>
            <GroupAddIcon sx={{ marginRight: "4px", color: "#e53935" }} />
            <Typography varient="h4" color="text.secondary" gutterBottom>
              Hiring multiple candidates
            </Typography>
          </div>
          <div style={{ marginTop: "8px" }}>
            <Typography
              variant="body"
              color="text.secondary"
              sx={{ width: "80%" }}
            >
              19 days ago
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Accordion>
  );
}