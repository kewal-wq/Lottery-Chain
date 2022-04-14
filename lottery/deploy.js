const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'large wasp silly birth amused laundry glance awful suit frost anxiety permit',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  console.log(JSON.stringify(abi));
  provider.engine.stop();
};
deploy();
