import React from 'react';

function GifList({ gifs }) {
  return (
    <ul className="list-unstyled">
      {gifs.map((gif, index) => (
        <li key={index} className="mb-3">
          <img src={gif.url} alt="gif" className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
