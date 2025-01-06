const axios = require("axios");

const API_URL = "http://192.168.1.100:8080/api/auth/local/register";
const API_TOKEN =
  "Bearer e9cdfbe1961010d91bc79c4a52cac3a35f46791187822359ef9792a27be34bcf2aa699000b7fd9ef88036ad6d7f8c86ad0410a33807a5b968059dec5a0908803ffe86579fa1b77578608a507e508fff77ab815fa492005b584095cb992ced8dc40de4610cdd8da6c1cad548f4df85a8da2563eca3c86c67d2f8a16fceb191ac5";

const payload = {
  username: "panuwatz",
  email: "s.panuwatx@gmail.com",
  password: "dekfewz121234",
};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send Api Success", response.data);
  })
  .catch((err) => {
    console.log("Send Error", err);
  });