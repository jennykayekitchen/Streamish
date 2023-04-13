import React, { useEffect, useState } from "react";
import Video from './Video.js';
import { getAllVideos, searchVideos } from "../modules/videoManager.js";

//change sql for search to include comments


const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideos().then(videos => setVideos(videos));
  };

  const [searchTerm, setSearchTerm] = useState("")
  
  const [sortOption, setSortOption] = useState(false)

  const [searchedVideos, setSearchedVideos] = useState([]);

  
  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setVideos(searchedVideos);
  }, [searchedVideos]);
  
  const handleSearchButtonClick = (event) => {
    event.preventDefault()
    
    searchVideos(searchTerm, sortOption).then(videos => setSearchedVideos(videos));
        
  }

  return (
    <div className="container">
      <div>
        <input 
            type="Text"
            placeholder="Enter your search here."
            value={searchTerm}
            onChange={
              (event) => 
              setSearchTerm(event.target.value)
            }
            />
        {/* <input
          type="checkbox"
          if checked, then sort by descending order />     */}
        <button
            onClick={(clickEvent) => handleSearchButtonClick(clickEvent)}>Search</button>
      </div>

      <div className="row justify-content-center">
        {videos.map((video) => (<Video key={video.id}
          video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;