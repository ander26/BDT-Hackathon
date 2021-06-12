import jsSHA from "jssha";

const localStorage = window.localStorage;

export const checkEmailExists = (email) => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      return true;
    }
  }
  return false;
};

export const saveUser = (user) => {
  const users = getUsers();
  let newUsers = [];
  if (users) {
    newUsers = users;
  }
  if (!checkEmailExists(user.email)) {
    const hashedPassword = calculateHash(user.password);
    newUsers.push({ ...user, password: hashedPassword });
    localStorage.setItem("users", JSON.stringify(newUsers));
    return true;
  } else {
    return false;
  }
};

export const getUsers = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    return users;
  } else {
    return undefined;
  }
};

export const getCountries = () => {
  const countries = JSON.parse(localStorage.getItem("countries"));
  if (countries) {
    return countries;
  } else {
    return undefined;
  }
};

export const saveCountries = (countries) => {
  localStorage.setItem("countries", JSON.stringify(countries));
};

const calculateHash = (password) => {
  // eslint-disable-next-line new-cap
  const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
  shaObj.update(password);
  const hash = shaObj.getHash("HEX");
  return hash;
};
