import axios from "axios";

function checkAvailability(domainName, callback) {
  axios
    .get(`http://localhost:5000/check_domain?name=${domainName}`)
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

var validateAndPurgeDomainName = (str) => {
  var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGJHIJKLMNOPQRSTUVWXYZ-";
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (i == 0 && charCode === 45) break;

    if (letras.indexOf(String.fromCharCode(charCode)) !== -1) {
      if (str.charCodeAt(i) !== 32) {
        if (str.charCodeAt(i - 1) === 32) {
          newStr = newStr + String.fromCharCode(charCode).toUpperCase();
        } else {
          newStr = newStr + String.fromCharCode(charCode).toLowerCase();
        }
      } else if (str.charCodeAt(i - 1) !== 32) {
        newStr = newStr + String.fromCharCode(charCode);
      }
    }
  }

  return newStr;
};

export { checkAvailability, validateAndPurgeDomainName };
