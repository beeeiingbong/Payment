// import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Form from './Components/Form';
import { useState } from 'react' 

function App() {
  const [data,setData]=useState({})
  const [saved,setSave]=useState()

  const creditCardNumber =(number)=>{
    console.log("In the APP",number)
    setData({...data,number})
  }

  const creditCardName=(name)=>{
    console.log(name)
    setData({...data,name})
  }

  const creditCardExpiryDate=(date)=>{
    console.log(date)
    setData({...data,date})
  }

  const creditCardCvv=(cvv)=>{
    console.log(cvv)
    setData({...data,cvv})
  }

  const save =(value)=>{
    console.log("in the App",value)
    setSave(value)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" id="my-node" alt="logo" />
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
        <button onClick={downloadImage}> Download Image</button>
      </header> */}

      <Cards data={data} saved={saved}/>
      <Form creditCardNumber={creditCardNumber}
            creditCardName ={creditCardName}
            creditCardExpiryDate ={creditCardExpiryDate}
            creditCardCvv ={creditCardCvv}
            save={save}/>
    </div>
  );
}

export default App;
