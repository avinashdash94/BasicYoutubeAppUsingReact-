import React from "react";
//Paper creates a paper like view with few efects we make it like 3D view
import{Paper, TextField} from "@material-ui/core";

class SearchBar extends React.Component{
    state = {
        searchTerm:''
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state; // De-structuring the state object 
        const { onFormSubmit } = this.props; // De-structuring the state object and get the props from App component 
        // console.log(searchTerm);

        onFormSubmit(searchTerm); // pass the  search data to the onFormSubmit()method 

        // By default when we search something and hit enter it refesesh the page, So the following will prevent it
        event.preventDefault();
    }

    render(){
        return(
            <Paper elecation={6} style={{padding: "25px"}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;
