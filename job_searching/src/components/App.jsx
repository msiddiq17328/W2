import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import HelpIcon from "@mui/icons-material/Help";
import { Box } from "@mui/system";
import React from 'react';
import Searchbar from './SearchBar';
import DropDown from './Dropdown';
import JobDetails from "./JobCard";


function App() {
    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "30%", marginTop: "100px" }}>
            <Searchbar></Searchbar>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "2%"}}>
                <DropDown style={{ marginRight: "4px" }}></DropDown>
                <DropDown></DropDown>
                <DropDown></DropDown>
                <Button variant="text">All</Button>
            </div>
            <div style={{ display: "flex", marginTop: "5%"}}>
              <Box sx={{ typography: "body2" }}>page 1 of 1,143 jobs</Box>&nbsp;
              <HelpIcon sx={{ color: "gray" }} />
            </div>
            <Divider variant="middle" style={{ marginTop: "2%"}}/>
            <div>
            <JobDetails></JobDetails>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;