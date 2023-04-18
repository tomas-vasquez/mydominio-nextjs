import axios from "axios";

function onClickHandler(e) {
  e.preventDefault();

  var domainName = e.target["domainName"].value;

  axios
    .get(`http://localhost:4000/check_domain?name=${domainName}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export { onClickHandler };
