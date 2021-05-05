import React from 'react';
import {Grid} from '@material-ui/core';
//  import {SearchBar, VideoList, VideoDetail } from './components/index'; NOTE: only for index file we dont need to mention we can use as below
import {SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';
 //import SearchBar from './components/SearchBar';

class App extends React.Component{
    //The following is the state variable 
    state = {
        videos: [],
        selectedVideo: null,
    }

    //onload of the page default view 
    componentDidMount(){
        this.handleSubmit('pdf generation with react')
    }

    //This event is used to populate the state variables on search using youTube Api
    handleSubmit = async (searchTerm) =>{ //As we are fetch data from youtube api so funtion should be async
        //perameters of get() methods are used for query with base URl
        const response = await youtube.get('search',{
            //This object is used to get append the Query on our base url:baseURL:'https://www.googleapis.com/youtube/v3',
             //This base url is in the api/youtube.js   
            params: {    
                part:'snippet', 
                maxResults: 5, 
                key: 'Use Your You Tube API Key', 
                q: searchTerm, // This is the query ( searched data )
            }
        }); //It is axios() method 
        
        //console.log(response.data.items);
        //Below we set the state variables with the fetch video data and pass it to the Video Components
        //From the selected Item we pic the first video of whole search
        this.setState({videos:response.data.items, selectedVideo: response.data.items[0]});        
    }

    //This methos is used when we click on video from the video list of Right hand side
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    render(){
        //De structure the state variables and use it to pass to other components(like VideoDetail, VideoList) tag           
        const {selectedVideo, videos} = this.state; 
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} style={{paddingBottom: "0px"}} >
                        {/* This section is for Search Bar */}
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>

                        <Grid item xs={8} style={{paddingRight: "0px", maxHeight: '550px'}}>
                        {/* This section is for Main running video Details  */}
                        <VideoDetail video={selectedVideo}/>
                        </Grid>
                        
                        <Grid item xs={4} style={{maxHeight: '550px', overflowX:'auto', marginTop:'40px', paddingTop: "0px"}}>
                        {/* This section is list of the videos right side */}
                        <VideoList videos={videos} onSelectVideo={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default App;
