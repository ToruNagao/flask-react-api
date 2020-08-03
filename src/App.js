import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    fetch('/time').then((res) => {
      res.json().then((data) => {
        setCurrentTime(data.time)
      })
    })
  }, [])

  return (
    <div className="App">
      {currentTime}
    </div>
  );
}

export default App;