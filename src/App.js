import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import PieceOfArt from './PieceOfArt.js'

// Query the Rijks museum API 
  // store the results in state
  // display those results to the page

function App() {
  // store the data we're getting back from the API in state
  const [art, setArt] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // if we only want it to run once, we need to store it in use effect with an empty array. it's a one-time only function. 

  // side effect to query API and only run when the app component mounts. 
  useEffect(() => {
    // get art from the API
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: 'LvqwJKjT',
        format: 'json',
        imgonly: true
      }
    }).then((data) => {
      // update 'art' state with data from API
      // in other words, i want to take my empty array and update it to be an array of the art object
      setArt(data.data.artObjects);
      setIsLoading(false);
    })
  }, [])



  return (
    <div className="App">
      <h1>My Museum Art!</h1>
      {
        isLoading ? <p>Loading...</p> : art.map((artwork) => {
            return (<PieceOfArt 
            imgSrc={artwork.webImage.url} 
            title={artwork.title} 
            longTitle={artwork.longTitle}
            key={artwork.id}
            />
          )
        })
      }
    </div>
  );
}

export default App;
