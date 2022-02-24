import React from "react";
import './Search.css';
import axios from 'axios';
import CardNew from './CardComponent';

class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            query: '',
            results: [],
            loading:false,
            message:''
        }
    }

    fetchSearchResults = (query) => {
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
                limit:100,
                offset:0,
                orderBy:"post_date"
            }
        })
        .then(res => {
            console.log(res.data);
            this.results = res.data
        })
        .catch(err => {
            console.log('im server response error');
        })
    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({
            query:query,
            loading: true,
            message: ''
        },()=>{
            this.fetchSearchResults(query);
        });
    };

    render() {
        const {query} = this.state;
        return (
            <div className="container">
                <h2 className="heading">Live Job Searching</h2>
                <label className="search-job" htmlFor="search-input">
                <input onChange={this.handleOnInputChange} id="search-input" type="text" value={query} placeholder="Search Job Here"/>
                </label>
                <button className="sort-button" value="post_date" >Sort by post date</button>
                <button className="sort-button" value="location" >Sort by location</button>
                <button className="sort-button" value="company" >Sort by company</button>
                <CardNew job_title="backend" company="grocer app" location="lahore"/>
            </div>
        )
    }
}

export default Search;