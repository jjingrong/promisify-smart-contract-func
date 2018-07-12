'use strict';

var promisifySmartContractFunc = function promisifySmartContractFunc(func) {
  for (var _len = arguments.length, additionalParams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    additionalParams[_key - 1] = arguments[_key];
  }

  if (typeof func !== 'function') return null;
  return new Promise(function (resolve, reject) {
    if (typeof func !== 'function') reject();
    func.apply(undefined, additionalParams.concat([function (e, v) {
      if (e) reject(e);
      if (typeof v !== 'undefined') {
        resolve(v);
      }
    }]));
  });
};