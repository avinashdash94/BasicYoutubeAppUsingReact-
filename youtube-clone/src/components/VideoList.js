import React from "react";
import {Grid} from "@material-ui/core";
import VidelItem from "./VideoItem";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const {videos, onSelectVideo } = props; //videos is the array of Videos and onSelectVideo is the event props we passed
    //Map method used  to retun a viedo Item for eact video comming from the searched video list
    //onVideoSelect event we are againg passing the onVideoSelect event props comming from App.js so that we can pass the video obj  to be played
    const listOfVideos = videos.map((video, id) => <VideoItem onSelectVideo={onSelectVideo} key={id} video={video}/>); //In the video Attr we send the video Obj as prop To use it in VideoItem
    
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>        
    )
}

export default VideoList;
