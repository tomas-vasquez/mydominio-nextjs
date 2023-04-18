import axios from "axios";

const extensions = [
  { text: ".com", price: 10 },
  { text: ".bo", price: 10 },
  { text: ".net", price: 10 },
  { text: ".com.bo", price: 10 },
  { text: ".dev", price: 10 },
];

function checkAvailability(domainName, setConsulting, setVerificationResults) {
  setConsulting(true);
  axios
    .get(`http://localhost:4000/check_domain?name=${domainName}`)
    .then(function (response) {
      setVerificationResults(response);
      setConsulting(false);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      setConsulting(false);
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

export { extensions, checkAvailability, validateAndPurgeDomainName };
