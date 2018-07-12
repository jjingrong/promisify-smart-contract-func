# promisify-smart-contract-func
A simple npm package to help you Promisify your Web3 calls that requires a callback

## What is this for
When you try to do function calls (such as from Metamask) such as
```
var balance = web3.eth.getBalance(yourEthAddress);
```
You will get the following error
```
Uncaught Error: The MetaMask Web3 object does not support synchronous methods like eth_getBalance without a callback parameter.
```

This package allows you to get around the callback requirements by wrapping your functions into a `Promise`.

This allows you to avoid what Javascript developers like to call as *callback hell*

## Installation

#### Run

```bash
npm install --save promisify-smart-contract-func
```

## Example usage
```javascript
import promisifySmartContractFunc from 'promisify-smart-contract-func';
```

### Using With Parameters

#### With `promisifySmartContractFunc`
```javascript
import promisifySmartContractFunc from 'promisify-smart-contract-func';
.
.
.
try {
  const balance = await promisifySmartContractFunc(
    web3.eth.getBalance, // Function
    address // Parameters
  );
  const approveTransactionHash = await promisifySmartContractFunc(
    token.approve, // Function
    contractAddress, amount // Parameters
  );
  if (approveTransactionHash) {
    console.log(balance);
    console.log(approveTransactionHash);
    // Do something
  }
} catch (error) {
  console.error(error);
  throw(error);
}
```

#### Without `promisifySmartContractFunc`
```javascript
web3.eth.getBalance(address, (error1, balance) => {
  contract.tokensDeposited(contractAddress, (error2, approveTransactionHash) => {
    if (approveTransactionHash) {
      console.log(balance);
      console.log(approveTransactionHash);
      // Do something ...
    }
    if (error2) {
      console.error(error2);
      throw(error2);
    }
  });
  if (error1) {
    // Do something ...
    console.error(error1);
    throw(error1);
  }
});

```


## Using Without Parameters

#### With `promisifySmartContractFunc`
```javascript
import promisifySmartContractFunc from 'promisify-smart-contract-func';
.
.
.
try {
  const tokenDeposited = await promisifySmartContractFunc(contract.tokensDeposited);
  console.log(tokenDeposited)
} catch (error) {
  console.error(error);
  throw(error);
}
```


#### Without `promisifySmartContractFunc`
```javascript
contract.tokensDeposited((error, value) => {
  if (value) {
    // Do something ...
  }
  if (error) {
    // Do something ...
  }
});

```
