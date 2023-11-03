import React, { useState } from 'react';

function GifSearch({ fetchGifs }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGifs(query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="form-control" />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
    </div>
  );
}

export default GifSearch;
