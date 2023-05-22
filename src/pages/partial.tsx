import { useState } from "react";

type TunesType = {
  artistId: number;
  artistName: string;
  primaryGenreName: string;
  trackId: number;
  trackName: string;
  trackCount: number;
};

const Partial = () => {
  const [searchData, setSearchData] = useState<TunesType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const test = 2;

  const handleSearch = (searchValue: string) => {
    fetch(`https://itunes.apple.com/search?term=${searchValue}&entity=song`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h1>iTunes</h1>
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={() => handleSearch(searchValue)}>Search</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Genre</th>
            <th>Track</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {searchData.map((tunes: TunesType, index) => {
            return (
              <tr key={index}>
                <td>{tunes.artistName}</td>
                <td>{tunes.primaryGenreName}</td>
                <td>{tunes.trackName}</td>
                <td>{tunes.trackCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Partial;
