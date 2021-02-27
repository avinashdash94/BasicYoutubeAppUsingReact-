import React from "react";
//Paper creates a paper like view with few efects we make it like 3D view
import{Paper, Typography} from "@material-ui/core";


const VideoDetail = (props) => {
    const {video} = props;
    if(!video) return <div>Loading...</div>
    //console.log(video.id.videoId);
    console.log(video);
    //Below variable is used to fetch the src of the video using template literals
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '80%'}}>
                {/* Iframe is used to play video */}
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>

            </Paper>
            <Paper elevation={6} style={{padding: '10px'}}>
                <Typography variant="h6">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;
