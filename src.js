/**
 * Helper function to run smart contract functions, or get data from it (ABI layer)
  * It returns a promise, so you could run use it as it is or wrap it in an async/await function
 * @param {function}          func             Function that has callback signature of web3 function( (error, value) => {...} )
 * @param {additionalParams}  additionalParams Optional Additional Parameters that are passed in
 * @returns {Promise}                          Promise that wraps the function
 */
const promisifySmartContractFunc = (func, ...additionalParams) => {
  if (typeof func !== 'function') return null;
  return new Promise((resolve, reject) => {
    if (typeof func !== 'function') reject();
    func(...additionalParams, (e, v) => {
      if (e) reject(e);
      if (typeof v !== 'undefined') {
        resolve(v);
      }
    });
  });
};

export default promisifySmartContractFunc;
