import React, { useState, useEffect } from "react";
import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  
// Here in getBalance the rinkeby network runs a test in which it requires the address in uppercase/lowerCase 
//String only but the deafult address from the metamask contains both upper and lower case characters
//so we take the address from our lottery contract covert it into lowerCase string and pass in to our getBalance method

const address = lottery._address;
  useEffect(() => {
    const getManager = async () => {
      const myManager = await lottery.methods.manager().call();
      setManager(myManager);
    };

    const getPlayers = async () => {
      const players = await lottery.methods.getPlayers().call();
      setPlayers(players);
    };

    const getBalance = async () => {

      const totalBalance = await web3.eth.getBalance(address.toString().toLowerCase());
      console.log(totalBalance);
      setBalance(totalBalance);
    };

    getManager();
    getPlayers();
    getBalance();
  }, []);

  const handleSubmit = async(event) => {
      event.preventDefault();
setMessage("Waiting for your transaction to be approved");
      const accounts = await web3.eth.getAccounts();

      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(value, "ether")
      })

      setMessage("You have been enetered in the lottery successfully!!");
  }

  const handleWinner = async () => {
   const accounts = await web3.eth.getAccounts();

   setMessage("Waiting for the transaction...")
   await lottery.methods.pickWinner().send({
     from: accounts[0]
   })
   setMessage("A winner has been picked successfully!");

  }


  

  return (
    <div className="App">
      <h1>Lottery Contract</h1>
      <div>
        This Contract is Deployed by {manager}, there are currently{" "}
        {players.length} players and the price pool is{" "}
        {web3.utils.fromWei(balance, "ether")} ether!
      </div>
      <hr />
      <h3>Wanna Try Your Luck? </h3>
      <form onSubmit={handleSubmit}>
      <label htmlFor="value">Enter your amount</label>
      <input type="text" id="value" value={value} onChange={event => setValue(event.target.value)} />
      <button>Enter</button>
      </form>
      <hr />
      <h3>{message}</h3>
      <hr />
      <button onClick={handleWinner}>Pick a Winner</button>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
