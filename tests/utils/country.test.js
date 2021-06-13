import { getCountries } from "../../utils/country.js";

global.fetch = require("node-fetch");

let countries = [];

beforeAll(async () => {
  countries = await getCountries();
});

test("Returns some data", async () => {
  expect.assertions(1);
  expect(countries.length).toBeGreaterThan(0);
});

test("Returns Belgium's data", async () => {
  expect.assertions(3);
  const belgium = countries.find((element) => element.name === "Belgium");
  expect(belgium.name).toBe("Belgium");
  expect(belgium.code).toBe("BE");
  expect(belgium.phone).toBe("+32");
});

test("Returns Canada's data", async () => {
  expect.assertions(3);
  const canada = countries.find((element) => element.name === "Canada");
  expect(canada.name).toBe("Canada");
  expect(canada.code).toBe("CA");
  expect(canada.phone).toBe("+1");
});
