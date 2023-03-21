import React from "react";
import axios from "axios";

function list() {
  return axios.get("https://pets-react-query-backen.herokuapp.com/pets/");
}

function adopt() {
  return axios.get("https://pets-react-query-backen.herokuapp.com/adopt/");
}

export default { list, adopt };
