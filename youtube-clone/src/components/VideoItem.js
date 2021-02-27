import React from "react";
//Paper creates a paper like view with few efects we make it like 3D view
import{Grid, Paper, Typography} from "@material-ui/core";

const VideoItem = (props) => {
    //video: is the video which we get through Map in Video list 
    //onVideoSelect: is the video event attr which we create in App.js pass to=> VidelList=> VideoItem
    const {video, onSelectVideo } = props; //video: is the video whic we get through Map in Video list 
    return (
        <Grid item xs={12}>
            <Paper style ={{display:'flex', alignItems: 'center', cursor:'pointer'}} onClick={()=> onSelectVideo(video)}>
                <img style={{marginRight:'10px', width:'50%'}} alt='thumbnail' src={video.snippet.thumbnails.medium.url}/> {/*url used is the rl of image used for video */}
                <br/><Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>

        </Grid>
    )    
}

export default VideoItem;
