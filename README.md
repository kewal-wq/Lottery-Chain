<!-- The first block of a blockchain is called genuses block and it does not have a prev hash
SHA256 it is secure hasing algorithm (64 characters) hexadecimal 1 character takes 4 bytes
So total 256 bytes of memory in the computer
Immutable ledger (Record book)
Distributed P2P network where the whole set of data is stored in all the computers in that network
So that if there is change in any one all the systems would help in restoring the data very quickly
Mining is all about predicting the nounce which would generate a hash that would be below the target
And would help in creating a block
Byzantine fault tolerence (castle and the commander story)(Less than 33.3% can be traitors)
Consensius protocol
1) To check if the block added by the miner is not malicius by checking proof of work
2) To decide which block would be added first in simultaneous addtion of blocks.
The block which would be spread in more than half of the network would be added first


Ethereum is a network made on which we can run our smart contracts 
Each computer in the network will have the copy of that smart contract 
In this each node will contain
1)History of the transactions/History of the smart contract/Current state of the smart contract
This blockchain is just like a virtual memory in everyones device soo that sending malicious code wont affect
files of others and also there is a gas fees over several operations performed in the ethereum

DAO(Decentralized autonomous organisations which can run on itself without involving ppl)

Soft fork the whole contract will update wheraes in the hard fork there would be two parellel networks created
Which means that one has to update in order to be a part of any

Ethereum network can be used to store money or data, networks are formed by one or more nodes
Each node is a machine running on ethereum client, each node can contain full copy of the blockchain
Blockchain is a database which keeps record of the all the trasactions which may ever have taken place

In ethereum one account is used on all the networks
It takes time to mine the blocks ...if it takes more time than it will raise the target value 
And accordingly when it finds a nounce which creates a hash less than the target it will make a block
The time taken from 0 to the target nonce is known as block time 

Smart contract is basically an account controlled by code
Metamask is a crytocurrency wallet which is used to interact with the ethereum blockchain

Wwb3 library is a tool we use to interact with any given ethereum network

When we deploy a contract it generates an ABI and bytecode (which gets deployed on the network)
Now there is truffle which is development environment used to for contract creation/local testing and deployment

Now from the constructor of Web3 we make an instance of web3 and when we do that we would need a provider to make in run in any network.
So basically provider acts as a bridge between the web3 instance and the ethereum network

To test our contracts we use mocha library and it has the following functions
1) it -> run a test and make an assertion
2) describe -> groups together it functions
3) beforeEach -> Executes some general setup

Here we use our local ethereum network ganache-cli which already has some test accounts though which we can make transactions
Now ganache also provides its provider which have accounts through which we can have transactions on
So after that we can also use our own account on metamask to do the same 
Now our contract should run on a particular node in the network / we can use ethereum node to do the same but its complicated so for that we use infura api which helps us to get access to a node on the network
We use the truffle wallet provider in place of ganache which allows us to connect to infura and unlock our account in order to make transactions in it

In solidity when we write int it is by default int256 which has large negative and positive range although we can use int8/int16 etc when we need only small values
uint -> has only positive value
msg is a global variable which is a object that stores details about the transaction
Gotcha-> We do not have the ability to pull a nested array from the solidity world to the javascript world
Its not limitation of solidity or javascript its just the limitation of the bridge between them that connects

Normal web works like if we click a button it the data goes/comes from the server 
But here in blockchain when we do something it happens and is handles in the browser for that we use web3 library which with the help of metamask connects us to the ethereum network which sends the data to us
Although the server can still work if we want it but its role is very less
Anytime user changes data they have to send a transaction to the network

Now metamask will always inject web3 in the browser we are using and that version is outdated (this it does by using provider)
So we have to use our version of web3 so what we do is we hijack the provider and put our version of web3 inside it (Browser)
Also this lottery application we are making for only the user who have metamask, so the users who doesnt have metamask cannot use it

Now we need to provide web3(Frontend) the ABI and the address of the account through which the contract is deployed so that it can interact with our deployed contract on any network

We take the ABI and account address and put it in react so as to create a local copy of our deployed contract in the blockchain-->

# Lottery-Chain
A lottery-system design while code along with a Udemy  course in order to master smart contracts 
