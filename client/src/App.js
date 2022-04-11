import './App.css';
import web3 from "./web3"

function App() {
  return (
    <div className="App">
     {console.log(web3.eth.getAccounts())}
      Hello
    </div>
  );
}

export default App;
