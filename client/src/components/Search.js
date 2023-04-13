import React, { useEffect, useState } from "react";
import { searchVideos } from "../modules/videoManager";

export const SearchBar = () => {
    const [searchedVideos, setSearchedVideos] = useState([]);

    const getSearchedVideos = () => {
        searchVideos().then(videos => setSearchedVideos(videos));
    };

    useEffect(() => {
        getSearchedVideos();
    }, []);
    
    return (
        <div>
            <input type="Text" />
            <button>Search</button>
        </div>
    )
}