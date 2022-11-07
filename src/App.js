import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const URL = 'http://localhost/mywebservice/index.php'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      setTasks(response.data)
    }).catch(error => {
      alert(error.response ? error.response.data.error: error);
    })
    
  }, [])
  
  return (
    <div>
      <h3>
        Message from server
      </h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
