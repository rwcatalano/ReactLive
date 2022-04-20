import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';


function App() {

  const [message, setMessage] = useState('Welcome');

  const btnClick = () => {
    console.log(message)

    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
      console.log(response)
    })


    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
      console.log(response);
      console.log(response.data.bpi.USD);
  })

  }


  return (
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

<div class="col-4 offset-col-4">
  <input type="text" value={message} onChange={(e) => setMessage(e.currentTarget.value)} class="form-control"/>
  <button type="button" onClick={btnClick} class="btn btn-info">Go Go</button>
</div>

      </header>


    </div>
  );
}

export default App;
