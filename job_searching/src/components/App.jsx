import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import HelpIcon from "@mui/icons-material/Help";
import { Box } from "@mui/system";
import React, { useEffect } from 'react';
import Searchbar from './SearchBar';
import DropDown from './Dropdown';
import JobDetails from "./JobCard";
import { NewContext } from "../datasharing/newcontext";
import { useState } from "react";



function App() {
  const [data, setData] = useState("");
  useEffect(() => {},[data]);
  console.log(data);
    return (
      <div className="App">
        <NewContext.Provider value={{data,setData}}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "35%", marginTop: "100px" }}>
              <Searchbar></Searchbar>
              <div style={{display: "flex", justifyContent: "space-between", marginTop: "2%"}}>
                  <DropDown name="Post Date" style={{ marginRight: "4px" }}></DropDown>
                  <DropDown name="Location"></DropDown>
                  <DropDown name= "Job Title"></DropDown>
                  <Button variant="text">All</Button>
              </div>
              <div style={{ display: "flex", marginTop: "5%"}}>
                <Box sx={{ typography: "body2" }}>page 1 of 1,143 jobs</Box>&nbsp;
                <HelpIcon sx={{ color: "gray" }} />
              </div>
              <Divider variant="middle" style={{ marginTop: "2%"}}/>
              <div>
                {
                  data && 
                  data.map((element)=>{return <JobDetails key={element.id} data={element}/>})
                }
              </div>
            </div>
          </div>
        </NewContext.Provider>
      </div>
    );
}

export default App;