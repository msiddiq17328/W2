import{  useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionSummary } from "@mui/material";
import React from 'react';
import SendIcon from "@mui/icons-material/Send";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";


export default function JobDetails({data}) {

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
        <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "start"}}>
          <div
            style={{
              display: "flex",
              marginTop: "16px",
              width: "100%",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="h6">{data.job_title}</Typography>
            <FavoriteBorderOutlinedIcon
              sx={{ marginRight: "4px", color: "#3949ab" }}
            />
          </div>
          <div style={{ display: "flex", marginTop: "16px", width: "100%", justifyContent: "space-between"}}>
            <Typography>{data.company}</Typography>
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
              {data.post_date}
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
            {data.salary_range}
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
              {data.post_date}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Accordion>
  );
}