import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const GifsFetch = (query = " ") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=fFPUGDuI8CwKHvGkMkaDCnz6FOA51AWk`)
      .then(response => response.json())
      .then(({ data }) => {
        setGifs(data.map(gif => ({ url: gif.images.original.url })));
      });
  }

  useEffect(() => {
    GifsFetch();
  }, []);

  return (
    <div>
      <GifSearch fetchGifs={GifsFetch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
