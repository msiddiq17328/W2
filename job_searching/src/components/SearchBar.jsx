import React,{useContext} from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";
import axios from 'axios';
import { debounce } from 'lodash';
import {NewContext} from '../datasharing/newcontext'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


export default function Searchbar({ search, setsearch }) {

  const  {setData} = useContext(NewContext);
  const fetchSearchResults = (query) => {
    if(query===null || query === '') {
        query = 'end';
    }
    let queryParamsArray = query.split(",");
    queryParamsArray = queryParamsArray.filter(function(value){ 
        return value !== '';
    });

    const getAllJobsUrl = `http://localhost:8080/jobs/search`;
    axios.get(getAllJobsUrl,{
        params:{
            input_params:queryParamsArray,
            limit:20,
            offset:0,
            orderBy:"post_date"
        }
    })
    .then(res => {
        setData(res.data)
    })
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        console.log('im server response error');
      }
    })
};

  const delayedHandleChange = debounce(eventData => fetchSearchResults(eventData), 500);

  const handleOnInputChange = (event) => {
    const query = event.target.value;
    delayedHandleChange(query);
};

  return (
    <Box sx={{ border: 1, borderBlockColor: "black", borderRadius: "8px" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleOnInputChange}
        />
      </Search>
    </Box>
  );
}