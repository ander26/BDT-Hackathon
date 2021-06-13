import {
  saveUser,
  getUsers,
  checkEmailExists,
  saveCountries,
  getCountries,
} from "../../utils/localStorage.js";

const testUser = {
  type: "developer",
  name: "Sam",
  email: "sam@email.com",
  password: "test",
  phone: "123456789",
  address: "Address test",
  country: "USA",
  dial: "+23",
  creditCard: "1234123412341234",
  cvv: "123",
};

const testCountries = [
  { name: "Country1", code: "C1", phone: "+1" },
  { name: "Country2", code: "C2", phone: "+2" },
];

afterEach(() => {
  localStorage.clear();
});

test("User is saved correctly", () => {
  saveUser(testUser);
  const users = getUsers();
  expect(users.length).toBe(1);
  expect(users[0].type).toBe(testUser.type);
  expect(users[0].name).toBe(testUser.name);
  expect(users[0].email).toBe(testUser.email);
  expect(users[0].password).not.toBe(testUser.password);
  expect(users[0].phone).toBe(testUser.phone);
  expect(users[0].address).toBe(testUser.address);
  expect(users[0].country).toBe(testUser.country);
  expect(users[0].dial).toBe(testUser.dial);
  expect(users[0].creditCard).toBe(testUser.creditCard);
  expect(users[0].cvv).toBe(testUser.cvv);
});

test("Returns true when email already exists", () => {
  saveUser(testUser);
  const verification = checkEmailExists(testUser.email);
  expect(verification).toBe(true);
});

test("Returns false when email doesnt exist", () => {
  saveUser(testUser);
  const verification = checkEmailExists("newEmail@mail.com");
  expect(verification).toBe(false);
});

test("Countries are saved ", () => {
  saveCountries(testCountries);
  const countries = getCountries();
  expect(countries.length).toBe(2);
});

test("Countries are saved correctly", () => {
  saveCountries(testCountries);
  const countries = getCountries();

  expect(countries[0].code).toBe(testCountries[0].code);
  expect(countries[0].name).toBe(testCountries[0].name);
  expect(countries[0].phone).toBe(testCountries[0].phone);

  expect(countries[1].code).toBe(testCountries[1].code);
  expect(countries[1].name).toBe(testCountries[1].name);
  expect(countries[1].phone).toBe(testCountries[1].phone);
});
