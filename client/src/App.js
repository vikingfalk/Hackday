import { useState, useEffect } from 'react';

const App = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        setImageURL(data.url);
      });
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
      <img src={imageURL} />
    </div>
  );
}

export default App;
