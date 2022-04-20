import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';


function App() {

  const [message, setMessage] = useState('Welcome');
  const [data, setData] = useState();


  const btnClick = (e) => {
    console.log(message)
    var currency = e.currentTarget.getAttribute('data-id')
    
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
      let d = response.data.bpi;
      switch(currency)
      {
        case 'usd':
          setData(d.USD);
          break;
          case 'gbp':
          setData(d.GBP);
          break;
          case 'eur':
          setData(d.EUR);
          break;
      }

      console.log(response)
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

<div class="row">
<div class="col-4 offset-col-4">
  <input type="text" value={message} onChange={(e) => setMessage(e.currentTarget.value)} class="form-control"/>
  <button type="button" onClick={btnClick} class="btn btn-info" data-id="usd">Usd</button>
  <button type="button" onClick={btnClick} class="btn btn-info" data-id="eur">Eur</button>
  <button type="button" onClick={btnClick} class="btn btn-info" data-id="gbp">Gbp</button>
</div>
</div>

<div class="row">
<div class="col-4 offset-col-4">
  <table>
    <tbody>
      <tr><td>{data?.description}</td></tr>
      <tr><td>{data?.rate}</td></tr>
    </tbody>
  </table>
</div>
</div>
      </header>


    </div>
  );
}

export default App;
