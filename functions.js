const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x, // x => x meaning x er value ja pass kora hobe tai result
  createUser: () => {
    const user = { fName: "amit" };
    user["lName"] = "majumder";
    return user;
  },

  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/4")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
